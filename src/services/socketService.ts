import { Socket, io } from "socket.io-client";

export class SocketBase {
  private SOCKET: Socket;
  public countLoadedBlocks: number;
  public countBlocks: number;

  constructor() {
    this.openSocket();

  }

  private async openSocket() {
    this.SOCKET = io(import.meta.env.VITE_BASE_URL);
  }

  private async uploadToServer(response: any, i: any, file: any, start: any, end: any) {
    let block = file.slice(start, end);
    let metainfo = new TextEncoder().encode(`{"token": "${response.token}", "blockIndex": "${i.toString().padStart(8, '0')}"}`);
    let fileData = new Uint8Array(await block.arrayBuffer());
    let combinedArray = new Uint8Array(metainfo.length + fileData.length);
    combinedArray.set(metainfo);
    combinedArray.set(fileData, metainfo.length);

    this.SOCKET.volatile.emit(
      'uploadBlock', 
      combinedArray,
    );

    block = null;
    combinedArray = null;
    metainfo = null;
    fileData = null;
  }

  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async loadFile(file: File) {
    const blockSize = 2 * 1024 * 1024;
    const blockCount = Math.ceil(file.size / blockSize);
    this.countBlocks = blockCount;

    let fileObj;

    if(file.name.includes('.rar')) {
      fileObj = {
        filename: file.name, 
        mimetype: "application/x-rar-compressed", 
        totalSize: file.size,
      }
    } else {
      fileObj = {
        filename: file.name, 
        mimetype: file.type, 
        totalSize: file.size,
      }
    }

    const response: any = await this.api('registerFile', fileObj); 

    if (!response.success) return;

    for (let i = 0; i < blockCount; i++) {
      const start = i * blockSize;
      const end = Math.min(start + blockSize, file.size);

      await this.uploadToServer(response, i, file, start, end);
      // await this.sleep(4);
    }
  }

  async uploadBlock(callback: (countLoadedBlocks: number) => void) {
    this.countLoadedBlocks = 0;
    
    this.SOCKET.off('uploadBlock');

    this.SOCKET.on('uploadBlock', (data) => {
      this.countLoadedBlocks++;
      callback(this.countLoadedBlocks); // вызываем колбэк при изменении countBlocks
    })
    return this.countBlocks;
  }

  async api(eventName: string, data: any = {}) {
    const payload = { ...data, id: Math.floor(Math.random() * 2**32) };
    return new Promise((resolve, reject) => {
      const handler = (response: any) => {
        if (response.id === payload.id) {
          resolve(response);
          this.SOCKET.off(eventName, handler);
        }
      };
  
      this.SOCKET.on(eventName, handler);
      this.SOCKET.emit(eventName, payload);
    });
  }
}
import { Socket, io } from "socket.io-client";

export class SocketBase {
  private SOCKET: Socket;

  constructor() {
    this.openSocket();

  }

  private async openSocket() {
    this.SOCKET = io(import.meta.env.VITE_BASE_URL);
  }

  async loadFile(file: File) {
    const blockSize = 2 * 1024 * 1024;
    const blockCount = Math.ceil(file.size / blockSize);

    const response: any = await this.api('registerFile', { 
      filename: file.name, 
      mimetype: file.type, 
      totalSize: file.size 
    });

    if (!response.success) return;

    for (let i = 0; i < blockCount; i++) {
      const start = i * blockSize;
      const end = Math.min(start + blockSize, file.size);
      const block = file.slice(start, end);

      const metainfo = new TextEncoder().encode(`{"token": "${response.token}", "blockIndex": "${i.toString().padStart(8, '0')}"}`);
      const fileData = new Uint8Array(await block.arrayBuffer());
      const combinedArray = new Uint8Array(metainfo.length + fileData.length);
      combinedArray.set(metainfo);
      combinedArray.set(fileData, metainfo.length);

      this.SOCKET.emit(
        'uploadBlock', 
        combinedArray,
      );
    }
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
import { Socket, io } from "socket.io-client";

export class SocketBase {
  private SOCKET: Socket;

  constructor() {
    this.openSocket();
  }

  private async openSocket() {
    this.SOCKET = io(import.meta.env.VITE_BASE_URL)
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
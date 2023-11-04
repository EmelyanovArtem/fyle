import { Socket, io } from "socket.io-client";

export class SocketBase {
  private SOCKET: Socket;

  constructor() {
    this.openSocket();
  }

  private async openSocket() {
    this.SOCKET = io(import.meta.env.VITE_BASE_URL)
  }

  async api(eventName: string, data?: any) {
    const payload = data;
    payload.id = Math.floor(Math.random() * 2**32);
    return new Promise((resolve, reject) => {
      this.SOCKET.on(eventName, (payloadSocket) => {
        if (payloadSocket.id === payload.id)
          resolve(payloadSocket)
      })
      this.SOCKET.emit(eventName, payload ?? '');
    })
  }
}

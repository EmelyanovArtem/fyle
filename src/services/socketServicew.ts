import { Socket, io } from "socket.io-client";

export class SocketBase {
  private SOCKET: Socket;

  constructor() {
    this.openSocket();
  }

  async openSocket() {
    this.SOCKET = io(import.meta.env.BASE_URL)
  }

  async api(eventName: string, data: string | Object) {
    
  }
}

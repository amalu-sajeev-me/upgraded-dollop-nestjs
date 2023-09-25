import { Injectable } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class AppService {
  private socket: Socket;
  constructor() {
    this.socket = io('http://localhost:4000');
    this.socket.on('connect', () => {
      console.log('connected to socket server -1');
    });
    this.socket.on('newData', (data) => {
      console.log(data);
    });
  }
  getHello(): string {
    return 'Hello World!';
  }
}

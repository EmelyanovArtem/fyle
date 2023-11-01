import { io } from "socket.io-client";

let socket = io('https://api.fyle.lmrsc.su');
console.log(socket);

let geustToken: string = '';
let userToken: string = '';

import {IUserPayload} from '@/interfaces.dot';

export function guestRegister() {
  socket.on('connect', () => {
    console.log('подключено'); 

    socket.on('guest-register', (data) => {
      geustToken = data.guest.token;
      localStorage.setItem('guestToken',JSON.stringify({token: geustToken}));
    }); 
    socket.emit('guest-register', 1); 
  })
};

export function guestAuth(token: Object) {
  socket.on('guest-auth', (data) => {
    console.log('Залогинился');
  })
  socket.emit('guest-auth', token);
}

export function register(userRegData: IUserPayload) {
  socket.on('register', (data) => {
    console.log('регистрация прошла успешно');
    console.log(data);
  })
  socket.emit('register', userRegData);
}

export function auth(userAuthData: IUserPayload) {
  socket.on('auth', (data) => {
    console.log('авторизация прошла успешно');
    // userToken = data.session.token;
    localStorage.setItem('token',JSON.stringify(data));
  })
  socket.emit('auth', userAuthData);

}
import { io } from "socket.io-client";

// let socket = io(import.meta.env.BASE_URL);
let socket = io("https://api.fyle.lmrsc.su");

let geustToken: string = '';
let userToken: string = '';

import {IUserPayload} from '@/interfaces.dot';

export function guestRegister() {
  socket.on('connect', () => {
    socket.on('guest-register', (data) => {
      geustToken = data.guest.token;
      localStorage.setItem('guestToken',JSON.stringify({token: geustToken}));
    }); 
    socket.emit('guest-register', 1); 
  })
};

export function guestAuth(token: Object) {
  socket.on('guest-auth', (data) => {
  })
  socket.emit('guest-auth', token);
}

export function register(userRegData: IUserPayload) {
  socket.on('register', (data) => {
  })
  socket.emit('register', userRegData);
}

export function auth(userAuthData: IUserPayload | string) {
  socket.on('auth', (data) => {
    if (data.session && data.session.token) {
      userToken = data.session.token;
      localStorage.setItem('token',userToken);
    } 
  })
  socket.emit('auth', userAuthData);

}
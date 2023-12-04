import {socket} from '@/main';
import { IUserPayload, auth } from '@/interfaces.dto';
import {validation} from '@/services/validation';

export async function register(data: IUserPayload ) {
  let reg = await socket.value.api('register', data);
}

export async function auth(data: IUserPayload) {
  let auth: any = await socket.value.api('auth', data);
  // if (auth.message === "User is not found") {
  //   alert('Неверные данные пользователя')
  //   window.location.reload();
  // } else if(auth.message === "You are already logged in") {
  //   alert('Вы уже авторизованы')
  // } else {
  //   localStorage.setItem('token', auth.session.token)
  // }
  return auth;
  // let validateRes = validation(auth);
  // return validateRes;
}

export async function autoAuth() {
  let currentToken = localStorage.getItem('token');
  if (currentToken !== null) {
  }
}
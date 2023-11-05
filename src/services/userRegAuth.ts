import {socket} from '@/main';
import { IUserPayload } from '@/interfaces.dot';

export async function register(data: IUserPayload ) {
  let reg = await socket.value.api('register', data);
  console.log(reg);
}

export async function auth(data: IUserPayload) {
  let auth: any = await socket.value.api('auth', data);
  if (auth.message === "User is not found") {
    alert('Неверные данные пользователя')
  } else if(auth.message === "You are already logged in") {
    alert('Пользователь уже авторизован')
  }
  localStorage.setItem('token', auth.session.token)
}

export async function autoAuth() {
  let currentToken = localStorage.getItem('token');
  if (currentToken !== null) {
    console.log(currentToken)
    // socket.value.api('auth', currentToken);
  }
}
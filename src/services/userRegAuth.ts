import {socket} from '@/main';
import { IUserPayload, auth } from '@/interfaces.dto';
import {validation} from '@/services/validation';

export async function register(data: IUserPayload ) {
  let reg = await socket.value.api('register', data);
  (await import('@/store/app')).useAppStore().register  = true;

  return reg;
}

export async function auth(data: IUserPayload) {

  let auth: any = await socket.value.api('auth', data);
  if (auth.success) {
    (await import('@/store/app')).useAppStore().auth  = true;
  }
 
  return auth;
  // let validateRes = validation(auth);
  // return validateRes;
}

export async function autoAuth() {
  let currentToken = localStorage.getItem('token');
  if (currentToken !== null) {
  }
}
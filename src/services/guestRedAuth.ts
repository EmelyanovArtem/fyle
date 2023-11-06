import {socket} from '@/main';

export async function guestRegAuth() {
  let lsGuestToken = localStorage.getItem('guestToken');

  if(!lsGuestToken) {
    // TODO: Должно быть описание возвращаемого типа, в dto файле
    let guestReg: any = await socket.value.api('guest-register')
    return localStorage.setItem('guestToken', guestReg.guest.token)
  }

  await socket.value.api('guest-auth', { token: lsGuestToken });
}
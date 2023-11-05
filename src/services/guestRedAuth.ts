import {socket} from '@/main';

export async function guestRegAuth() {
  let lsGuestToken = localStorage.getItem('guestToken');

  if(lsGuestToken === null) {
    lsGuestToken = '';
    let guestReg: any = await socket.value.api('guest-register')

    console.log(guestReg);
    localStorage.setItem('guestToken', guestReg.guest.token)
  }
}
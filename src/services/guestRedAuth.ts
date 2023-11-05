import {socket} from '@/main';

export async function guestRegAuth() {
  let lsGuestToken = localStorage.getItem('guestToken');
  let lsToken = localStorage.getItem('token');

  if(lsGuestToken === null) {
    lsGuestToken = '';
    let guestReg = await socket.value.api('guest-register')

    console.log(guestReg);
    localStorage.setItem('guestToken', guestReg.guest.token)
  }
  else {
    // lsGuestToken = lsGuestToken as string;
    // guestAuth(lsGuestToken);
    let guestAuth = await socket.value.api('guest-auth');
  }
}

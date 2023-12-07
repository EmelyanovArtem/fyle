import { IUserPayload } from "@/interfaces.dto";

export async function  registerAuth(this: any, userData: IUserPayload, method: any) {
  if (this.valid) {
     const responce: any = await method(userData); 

     this.authToggle = responce.success; 
     this.errorMessage = responce.message;

    const AppStoreUserData = await (await import('@/store/app')).useAppStore().userData;
    Object.assign(AppStoreUserData, userData);

    console.log(this.authToggle);

     this.valid = false;
  }
}


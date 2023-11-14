export interface IUserPayload {
  login: string,
  password: string,
  token?: string,
}

export interface IUserGuestRegister {
  // root?: {
    succes?: boolean,
    guest?: {
       files: File[],
       _id: string,
       token: string,
       createdAt: string,
       uptaredAt: string,
       __v: number,
    },
    id?: number,
    msg?: string
  // }
}
export interface IUserPayload {
  login: string,
  password: string,
  token?: string,
}

export interface auth {
  // 0: string
  // 1: {
  //   id: number,
  //   message?: string
  //   session?: {
  //     createdAt: string,
  //     token: string,
  //     updatedAt: string,
  //     user: string,
  //     __v: number,
  //     _id: string
  //   },
  //   succes: boolean
  // }  
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
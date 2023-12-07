// Utilities
import { IUserPayload } from '@/interfaces.dto'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    auth: false,
    register: false,
    userData: {
      login: '',
      password: '',
    } as IUserPayload,
  }),
})

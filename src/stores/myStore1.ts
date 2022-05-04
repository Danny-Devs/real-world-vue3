import { defineStore } from 'pinia'

export const useMyStore1 = defineStore('myStore1', {
  state: () => ({
    counter: 0,
  }),
})

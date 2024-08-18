import { ref } from 'vue'
import { createPinia, defineStore } from 'pinia'

export const pinia = createPinia()

export const useBaseStore = defineStore('base', () => {
  const count = ref(0)
  return { count }
})

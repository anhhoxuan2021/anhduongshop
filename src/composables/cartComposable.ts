
import store from '@/store'
import { ref } from 'vue'

export const cartComposable = () => {
    return ref()
  }

export const externalStore = () => {
    return store.state.testState
  }
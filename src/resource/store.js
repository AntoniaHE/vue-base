import 'babel-polyfill'
import Vuex from 'vuex'

import HelloWorld from './components/store'
import GlobalStore from './global/store'

let store

function initStore () {
  store = new Vuex.Store({
    GlobalStore,
    ...HelloWorld
  })
}

export default function () {
  if (!store) {
    initStore()
  }
  console.log(store)
  return store
}

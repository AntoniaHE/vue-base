import entryFactory from '../main'
import router from './router'

import store from './store'

entryFactory(store, router)

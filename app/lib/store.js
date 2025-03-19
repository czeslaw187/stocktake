import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, createMigrate, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import countReducer from './features/countSlice'
import passReducer from './features/passSlice'
import entryReducer from './features/entrySlice'
import hoursReducer from './features/hoursSlice'

const migrations = {
  2: (state)=> {
    return {
      ...state,
      device: undefined
    }
  },
  3: (state)=> {
    return {
      device: state.device
    }
  }
}

const persistConfig = {
  key: 'primary',
  version: 3,
  storage,
  migrate: createMigrate(migrations, {debug: false})
}

const rootReducer = combineReducers({
  count: countReducer,
  pass: passReducer,
  entry: entryReducer,
  hours: hoursReducer
})

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export const makeStore = () => {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    return makeConfiguredStore()
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    let store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        })
    })
    store.__persistor = persistStore(store)
    return store
  }
}
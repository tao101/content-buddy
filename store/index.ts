import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers,
} from '@reduxjs/toolkit'
import { authSlice } from './features/auth'
import { createWrapper } from 'next-redux-wrapper'
import { useDispatch, useSelector } from 'react-redux'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { settingsSlice } from './features/settings'

const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
    [settingsSlice.name]: settingsSlice.reducer,
})

const makeConfiguredStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER,
                    ],
                },
            }),
    })

export const makeStore = () => {
    const isServer = typeof window === 'undefined'
    if (isServer) {
        return makeConfiguredStore()
    } else {
        // we need it only on client side
        const persistConfig = {
            key: 'nextjs',
            //whitelist: ['auth'], // make sure it does not clash with server keys
            storage,
        }
        const persistedReducer = persistReducer(persistConfig, rootReducer)
        let store: any = configureStore({
            reducer: persistedReducer,
            devTools: process.env.NODE_ENV !== 'production',
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware({
                    serializableCheck: {
                        ignoredActions: [
                            FLUSH,
                            REHYDRATE,
                            PAUSE,
                            PERSIST,
                            PURGE,
                            REGISTER,
                        ],
                    },
                }),
        })
        store.__persistor = persistStore(store) // Nasty hack
        return store
    }
}

export const wrapper = createWrapper<AppStore>(makeStore)

export type AppStore = ReturnType<typeof makeStore>

export type AppState = ReturnType<AppStore['getState']>

// export type appDispatch = ReturnType<AppStore['dispatch']>

export const appDispatch = () => useDispatch<AppStore['dispatch']>()
export const appSelector = <T>(selector: (state: AppState) => T) =>
    useSelector(selector)

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>

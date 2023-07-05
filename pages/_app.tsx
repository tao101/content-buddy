import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import type { AppProps } from 'next/app'
import { wrapper } from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'react-redux'

import { Exo_2 } from 'next/font/google'

import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const exo_2 = Exo_2({ subsets: ['latin'] })

function MyApp({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest)

    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${exo_2.style.fontFamily};
                }
            `}</style>
            <PersistGate
                persistor={store.__persistor}
                loading={<div>Loading</div>}
            >
                <Component {...props.pageProps} />
            </PersistGate>
            <ToastContainer />
        </>
    )
}

export default wrapper.withRedux(MyApp)

import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthState, setAuthState } from '@/store/features/auth'
import Header from '@/components/header'
import Trial from '@/components/trial/trial'
import Features from '@/components/features'
import Pricing from '@/components/pricing'

export default function Home() {
    const authState = useSelector(selectAuthState)

    return (
        <main className=" bg-primary w-full min-h-screen text-white  ">
            <Header />
            <Trial />
            <Features />
            <Pricing />
        </main>
    )
}

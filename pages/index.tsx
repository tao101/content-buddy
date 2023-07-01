import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthState, setAuthState } from '@/store/features/auth'
import Header from '@/components/header'
import Trial from '@/components/trial/trial'
import Features from '@/components/features/features'

export default function Home() {
    const authState = useSelector(selectAuthState)

    return (
        <main className=" bg-primary w-full min-h-screen text-white  px-12">
            <Header />
            <Trial />
            <Features />
        </main>
    )
}

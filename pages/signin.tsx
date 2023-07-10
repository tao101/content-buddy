import { AppState, appDispatch, appSelector } from '@/store'
import {
    signInWithGoogle,
    signUpWithPassword,
    signInWithPassword,
} from '@/store/features/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BiLogoGoogle } from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SignIn() {
    const router = useRouter()
    const dispatch = appDispatch()
    const auth = useSelector((state: AppState) => state.auth)
    const [onShowPassword, setOnShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (auth && auth.user) {
            router.push('/welcome')
        }
    }, [auth])

    const onSignupWithGoogle = async () => {
        try {
            dispatch(signInWithGoogle())
        } catch (error) {
            console.log(error)
        }
    }

    const onSignInWithPassword = async () => {
        try {
            dispatch(signInWithPassword({ email, password }))
        } catch (error) {
            toast.error('An error occurred during signin.')
            console.log('asdsa ', error)
        }
    }
    return (
        <div className="flex flex-row h-screen ">
            <div className="flex-1 flex flex-col justify-center items-center bg-gray-800 ">
                <img src="/brain.svg" width={120} height={120} />
                <div className="text-[24px] font-bold text-white my-4">
                    Sign in
                </div>
                <button
                    onClick={onSignupWithGoogle}
                    className="flex items-center justify-center p-[10px] w-[350px] bg-secondary text-white text-md font-[500] rounded-[5px] cursor-pointer mb-[10px]"
                >
                    <BiLogoGoogle className="my-auto mx-1 text-center w-[20px] h-[20px]" />
                    Sign in with Google
                </button>
                <div className="my-4 text-gray-400">or</div>

                <input
                    type="email"
                    className="px-4 py-[10px] order-solid bg-gray-500  rounded-[15px] mb-[10px] w-[350px] text-white focus:outline-0"
                    onClick={() => setOnShowPassword(!onShowPassword)}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {onShowPassword && (
                    <input
                        type="password"
                        className="px-4 py-[10px] order-solid bg-gray-500  rounded-[15px] mb-[10px] w-[350px] text-white focus:outline-0"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                )}

                <button
                    onClick={onSignInWithPassword}
                    className="flex items-center justify-center p-[10px] w-[350px] bg-gray-500 text-white text-md font-bold rounded-[15px] cursor-pointer mb-[10px]"
                >
                    Sign in with email
                </button>
            </div>
            <div className="flex-2 flex items-center justify-center right-column bg-gray-700 ">
                <img
                    src="/Group1.svg"
                    width={800}
                    height={450}
                    alt="Video"
                    className="mx-auto cursor-pointer"
                />
            </div>
        </div>
    )
}

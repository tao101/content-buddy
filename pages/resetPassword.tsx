import { AppState, appDispatch, appSelector } from '@/store'
import { TfiArrowCircleLeft } from 'react-icons/tfi'

import {
    signInWithGoogle,
    signUpWithPassword,
    signInWithPassword,
    resetPassword,
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
    const [resetEmail, setResetEmail] = useState('')
    const [password, setPassword] = useState('')
    const [onShowReset, setOnShowReset] = useState(false)

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
    const onSignUp = async () => {
        try {
            router.push('/signup')
        } catch (error) {
            toast.error('An error occurred during signup.')
            console.log(error)
        }
    }
    const onResetPassword = async () => {
        try {
            dispatch(resetPassword({ resetEmail }))
            toast.success('onResetPassword dispatched')
            console.log('onResetPassword dispatched')
        } catch (error) {
            toast.error('An error occurred during reset password.')
            console.log(error)
        }
    }

    return (
        <div className="flex flex-row h-screen ">
            <div
                className={
                    'max-md:w-full flex flex-col justify-center items-center bg-gray-800 w-fit lg:px-16 md:px-8'
                }
            >
                <img src="/brain.svg" width={120} height={120} />
                <div className="text-[24px] font-bold text-white mt-4">
                    Forgot Password?
                </div>
                <p className="text-sm max-w-[350px] text-gray-300 text-justify my-4">
                    Enter the email address you used when you joined and we'll
                    send you instructions to reset your password.
                </p>
                <p className="text-sm max-w-[350px] text-gray-300 text-justify my-4">
                    For security reasons, we do NOT store your password. So rest
                    assured that we will never send your password via email.
                </p>

                <input
                    type="email"
                    className="px-4 py-[10px] order-solid bg-gray-500  rounded-[15px] mb-[10px] w-[350px] text-white focus:outline-0"
                    placeholder="Email Adress"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                />
                <button
                    onClick={onResetPassword}
                    className="flex items-center justify-center p-[10px] w-[350px] bg-gray-500 text-white text-md font-bold rounded-[15px] cursor-pointer mb-[10px]"
                >
                    Send Reset Instrucrions
                </button>

                <div className="text-xs text-white">
                    Don't have an account yet?
                    <span
                        onClick={onSignUp}
                        className="text-secondary font-bold text-sm cursor-pointer"
                    >
                        {' '}
                        Sign up now!
                    </span>
                </div>
            </div>

            <div className="hidden md:flex flex-1 flex items-center justify-center bg-gray-700  ">
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

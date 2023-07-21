import { AppState, appDispatch, appSelector } from '@/store'
import { TfiArrowCircleLeft } from 'react-icons/tfi'
import { motion, useAnimation } from 'framer-motion'

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
    const onForgetPassword = async () => {
        try {
            router.push('/resetPassword')
        } catch (error) {
            toast.error('An error occurred during resetPassword.')
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

    const onAboutClick = () => {
        router.push('/')
    }

    return (
        <div className="flex flex-row h-screen ">
            <div
                className={` ${
                    onShowReset
                        ? 'relative max-md:hidden flex flex-col justify-center items-center bg-primary w-fit lg:px-16 md:px-8'
                        : 'relative max-md:w-full flex flex-col justify-center items-center bg-primary w-fit lg:px-16 md:px-8'
                } `}
            >
                <div
                    onClick={onAboutClick}
                    className="text-gray-300 absolute top-3 right-5 cursor-pointer hover:underline"
                >
                    Home
                </div>
                <img src="/brain.svg" width={120} height={120} />
                <div className="text-[24px] font-bold text-white mt-4">
                    Sign in
                </div>
                <div className="text-md text-gray-300 mb-6">
                    Don't have an account yet?
                    <span
                        onClick={onSignUp}
                        className="text-secondary font-bold text-md cursor-pointer"
                    >
                        {' '}
                        Sign up now!
                    </span>
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
                <div className="text-xs text-gray-300 mb-6">
                    Forgot your password?{' '}
                    <span
                        onClick={onForgetPassword}
                        className="text-secondary font-bold text-xs cursor-pointer"
                    >
                        {' '}
                        Reset it here.
                    </span>
                </div>
            </div>

            {onShowReset ? (
                <div className="flex flex-col w-full items-center p-4">
                    <div className="w-full flex flex-row px-4 items-center justify-between top-0">
                        <TfiArrowCircleLeft
                            className="text-[25px] cursor-pointer "
                            onClick={() => setOnShowReset(false)}
                        />
                        <div className="text-xs">
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

                    <div className="lg:max-w-[400px] md:max-w-[300px] flex flex-col gap-2 text-sm h-full justify-center ">
                        <h1 className="text-xl font-bold">Forgot Password?</h1>
                        <p className="">
                            Enter the email address you used when you joined and
                            we'll send you instructions to reset your password.
                        </p>
                        <p className="">
                            For security reasons, we do NOT store your password.
                            So rest assured that we will never send your
                            password via email.
                        </p>
                        <input
                            type="email"
                            className="px-4 py-[15px] order-solid  rounded-[15px] mb-[10px] md:w-full max-md:max-w-[300px] text-gray-800 shadow-sm shadow-gray-800 focus:outline-0 mt-6"
                            placeholder="Email Adress"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                        />
                        <button
                            onClick={onResetPassword}
                            className="flex items-center justify-center p-[15px] w-full bg-gray-800 text-white text-md max-md:max-w-[300px] font-bold rounded-[15px] cursor-pointer mb-[10px]"
                        >
                            Send Reset Instrucrions
                        </button>
                    </div>
                </div>
            ) : (
                <div className="hidden md:flex flex-1 flex items-center justify-center bg-gray-700  ">
                    <img
                        src="/Group1.svg"
                        width={800}
                        height={450}
                        alt="Video"
                        className="mx-auto cursor-pointer"
                    />
                </div>
            )}
        </div>
    )
}

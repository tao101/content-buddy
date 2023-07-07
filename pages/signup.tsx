import { AppState, appDispatch, appSelector } from '@/store'
import { signInWithGoogle } from '@/store/features/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Signup() {
    const router = useRouter()
    const dispatch = appDispatch()
    const auth = useSelector((state: AppState) => state.auth)
    console.log('auth', auth)

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

    return (
        <div className="flex flex-row h-screen ">
            <div className="flex-1 flex flex-col justify-center items-center bg-gray-800 ">
                <img src="/brain.svg" width={120} height={120} />
                <div className="text-[24px] font-bold text-white">
                    Create Account
                </div>
                <div className="text-gray-300 mb-4">
                    Already have an account?{' '}
                    <span className="text-secondary font-bold text-lg cursor-pointer">
                        {' '}
                        Sign in
                    </span>
                </div>
                <button
                    onClick={onSignupWithGoogle}
                    className="flex items-center justify-center p-[10px] w-[350px] bg-secondary text-white text-md font-[500] rounded-[5px] cursor-pointer mb-[10px]"
                >
                    <img
                        src="/google-icon.png"
                        width={20}
                        height={20}
                        alt="Google Icon"
                    />
                    Continue with Google
                </button>
                <div className="my-4 text-gray-400">or</div>

                <input
                    type="email"
                    className="px-4 py-[10px] order-solid bg-gray-500  rounded-[15px] mb-[10px] w-[350px]"
                    placeholder="Email"
                />
                <button className="flex items-center justify-center p-[10px] w-[350px] bg-gray-500 text-white text-md font-bold rounded-[15px] cursor-pointer mb-[10px]">
                    Continue with email
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

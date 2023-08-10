import Link from 'next/link'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { AppState, appDispatch, appSelector } from '@/store'
import { signOutUser } from '@/store/features/auth'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

import { FaQuestion } from 'react-icons/fa'

import { AiFillHeart, AiFillHome } from 'react-icons/ai'
import { BiLogOut, BiHelpCircle } from 'react-icons/bi'
import { RiChatHistoryLine } from 'react-icons/ri'
import { CiSaveDown1 } from 'react-icons/ci'
import { SiGnuprivacyguard } from 'react-icons/si'
import { LuLogIn } from 'react-icons/lu'

import { useRouter } from 'next/router'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const auth = useSelector((state: AppState) => state.auth)
    const user = auth.user
    const dispatch = appDispatch()
    const router = useRouter()

    const onLogout = () => {
        dispatch(signOutUser())
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const onSignupClick = () => {
        router.push('/signup')
    }
    const onSigninClick = () => {
        router.push('/signin')
    }

    // const onSettingsClick = () => {
    //   router.push('/settings');
    // };

    // const onProfileClick = () => {
    //   toast.info('Comming Soon!');
    // };

    return (
        <div className="relative font-sans w-full text-white flex items-center px-6 py-6  ">
            <div
                className="border border-gray-400 rounded cursor-pointer"
                onClick={toggleMenu}
            >
                <img
                    src="/menu.png"
                    width={18}
                    height={20}
                    className="my-1 mx-2"
                    alt="Menu"
                />
            </div>

            {menuOpen && (
                <div
                    className={`${
                        user
                            ? 'fixed top-0 md:left-0  left-0 z-[1000] h-[100vh] w-[100vw] flex flex-row  bg-black/70 '
                            : 'fixed top-0 left-0 bg-red-300 z-[1000] h-[100vh] w-[20vw] flex flex-row'
                    }`}
                >
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.5 }}
                        className={
                            'h-[100vh] lg:w-[21vw] md:w-[30vw] sm:w-[40vw] w-[55vw] bg-black flex flex-col justify-between border-r border-white'
                        }
                    >
                        <div
                            className="flex flex-row w-full border-b border-white justify-between p-4 cursor-pointer "
                            onClick={toggleMenu}
                        >
                            <div className="text-md text-center items-center font-600 capitalize w-full ">
                                Content buddy
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="25"
                                height="25"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="flex flex-col  ">
                            {!user ? (
                                <>
                                    <button className=" hover:bg-mygray flex flex-row px-8 py-4 gap-2 items-center text-white text-md hover:underline hover:underline-offset-1 ">
                                        <AiFillHome className="w-6 h-6" /> About
                                        Us
                                    </button>
                                    <button className="hover:bg-mygray flex flex-row  px-8 py-4 gap-2 items-center  text-white text-md  hover:underline hover:underline-offset-1 ">
                                        <FaQuestion className="w-4 h-6" />
                                        FAQ
                                    </button>
                                    <button
                                        onClick={onSignupClick}
                                        className="hover:bg-mygray flex flex-row  px-8 py-4 gap-2 items-center text-white text-md  hover:underline hover:underline-offset-1 "
                                    >
                                        <SiGnuprivacyguard className="w-6 h-6" />{' '}
                                        Sign up
                                    </button>
                                    <button
                                        onClick={onSigninClick}
                                        className=" hover:bg-mygray flex flex-row  px-8 py-4 gap-2 items-center text-white text-md hover:underline hover:underline-offset-1 "
                                    >
                                        <LuLogIn className="w-6 h-6" />
                                        Sign in
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className=" hover:bg-mygray flex flex-row  px-8 py-4 gap-2 items-center text-white text-md hover:underline hover:underline-offset-1 ">
                                        <RiChatHistoryLine className="w-6 h-6" />{' '}
                                        History
                                    </button>
                                    <button className="hover:bg-mygray flex flex-row  px-8 py-4 gap-2 items-center  text-white text-md  hover:underline hover:underline-offset-1 ">
                                        <CiSaveDown1 className="w-6 h-6" />
                                        Saved
                                    </button>
                                    <button
                                        onClick={onSignupClick}
                                        className="hover:bg-mygray flex flex-row  px-8 py-4 gap-2 items-center text-white text-md  hover:underline hover:underline-offset-1 "
                                    >
                                        <BiHelpCircle className="w-6 h-6" />{' '}
                                        Help
                                    </button>
                                    <button
                                        onClick={onLogout}
                                        className=" hover:bg-mygray flex flex-row  px-8 py-4 gap-2 items-center text-white text-md hover:underline hover:underline-offset-1 "
                                    >
                                        <BiLogOut className="w-6 h-6" />
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="flex flex-col py-4 items-center justify-center">
                            <div className="text-gray-400 text-sm font-[500]">
                                {' '}
                                Updates Terms & Privacy
                            </div>
                            <div className="flex flex-row gap-1 text-pink-300">
                                @2023 - contentBuddy
                                <AiFillHeart className="h-full" />
                            </div>
                        </div>
                    </motion.div>
                    <div onClick={toggleMenu} className="flex-1 "></div>
                </div>
            )}
        </div>
    )
}

import Link from 'next/link'
import { toast } from 'react-toastify'
import { useState } from 'react'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    // const onSettingsClick = () => {
    //   router.push('/settings');
    // };

    // const onProfileClick = () => {
    //   toast.info('Comming Soon!');
    // };

    return (
        <div className="font-sans w-full text-white flex items-center px-12 py-6">
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

            <div
                className={`menu-overlay ${menuOpen ? 'open' : ''} `}
                onClick={toggleMenu}
            >
                <div
                    className={`menu-content ${
                        menuOpen ? 'open' : ''
                    } bg-primary`}
                >
                    <button className="text-white text-2xl mb-4 hover:underline hover:underline-offset-1 ">
                        Home
                    </button>
                    <button className="text-white text-2xl mb-4 hover:underline hover:underline-offset-1 ">
                        About Us
                    </button>
                    <button className="text-white text-2xl mb-4 hover:underline hover:underline-offset-1 ">
                        FAQ
                    </button>
                    <button className="text-white text-2xl mb-4 hover:underline hover:underline-offset-1 ">
                        Pricing
                    </button>
                    <div
                        className="close-button cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="30"
                            height="30"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

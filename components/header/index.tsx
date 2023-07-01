import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export default function Header() {
    const router = useRouter()

    // const onSettingsClick = () => {
    //   router.push('/settings');
    // };

    // const onProfileClick = () => {
    //   toast.info('Comming Soon!');
    // };

    return (
        <div className="font-sans w-full text-white flex items-center px-12 py-6">
            <div className="border border-gray-400 rounded cursor-pointer">
                <img
                    src="/menu.png"
                    width={18}
                    height={20}
                    className="my-1 mx-2"
                />
            </div>
        </div>
    )
}

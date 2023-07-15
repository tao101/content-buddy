import { useRouter } from 'next/router'

export default function Trial() {
    const router = useRouter()
    // const onSettingsClick = () => {
    //   router.push('/settings');
    // };

    const onSignupClick = () => {
        router.push('/signup')
    }
    return (
        <div className="flex flex-col items-center content-center text-center md:max-w-[70%]  mx-auto px-12 ">
            <h1 className="capitalize text-3xl font-bold">content Buddy</h1>
            <h1 className="py-4 leading-2 text-gray-300  font-[300]">
                Mauris a sem vitae enim blandit dignissim sed vel sem. Donec
                tincidunt mauris eget dui dictum, a tristique ante elementum.
                Donec ac risus vitae quam ornare euismod eu a urna.
            </h1>
            <div
                className="rounded-full bg-secondary px-8 py-2 mt-4 cursor-pointer"
                onClick={onSignupClick}
            >
                Try it for free
            </div>
        </div>
    )
}

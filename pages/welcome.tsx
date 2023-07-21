import Extension from '@/components/extension'
import Header from '@/components/header'

export default function Welcome() {
    return (
        <div className="flex flex-col bg-primary w-full h-[100vh] text-white md:px-12 px-4 ">
            <Header />
            <Extension />
        </div>
    )
}

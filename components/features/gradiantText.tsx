export default function GradiantText() {
    return (
        <div className="md:pb-24 pb-12 flex flex-col">
            <div className=" text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 md:max-w-[500px] w-[60%] mx-auto md:text-6xl text-4xl text-center font-[600]">
                Say hello to your personal content creation companion.
            </div>
            <img
                src="/Group1.svg"
                className="md:w-[75%] mx-auto cursor-pointer shadow-gray-800 shadow-md my-16"
            />
            <div className=" text-transparent bg-clip-text bg-gradient-to-b from-[#F6F6F6] to-[#679DBB] md:max-w-[600px] w-[60%] mx-auto md:text-5xl text-3xl text-center font-[600] leading-12">
                Get access to exclusive special deals and be the first to know
                about our latest content{' '}
            </div>
            <div className="flex flex-row gap-x-2  justify-between md:w-[600px] mx-auto my-10">
                <div className=" relative flex w-full flex-wrap items-stretch  flex-1 bg-gray-100 rounded-full px-6 py-3 border-transparent focus:border-transparent focus:ring-0">
                    <img
                        src="/email.svg"
                        color="#CCD5E2"
                        className="color-gray-300  pl-2 py-1 z-10 h-fit leading-snug font-normal absolute text-center text-slate-300  absolute bg-transparent rounded text-base items-center justify-center w-8 "
                    />

                    <input
                        placeholder="Email"
                        className=" pl-10 relative bg-transparent placeholder-slate-300 text-slate-600 w-full "
                    />
                </div>

                <button className="w-[180px] rounded-full bg-gradient-to-r from-[#679DBB] to-[#F8F9FA] ">
                    Submit
                </button>
            </div>
        </div>
    )
}

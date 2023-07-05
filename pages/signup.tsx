import Image from 'next/image'

const Signup = () => {
    return (
        <div className="flex flex-row h-screen ">
            <div className="left-column bg-gray-800 ">
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
                <button className="flex items-center justify-center p-[10px] w-[350px] bg-secondary text-white text-md font-[500] rounded-[5px] cursor-pointer mb-[10px]">
                    <img
                        src="/google-icon.png"
                        width={20}
                        height={20}
                        alt="Google Icon"
                    />
                    Continue with Google
                </button>
                <div className="divider">or</div>

                <input
                    type="email"
                    className="px-4 py-[10px] order-solid bg-gray-500  rounded-[15px] mb-[10px] w-[350px]"
                    placeholder="Email"
                />
                <button className="flex items-center justify-center p-[10px] w-[350px] bg-gray-500 text-white text-md font-bold rounded-[15px] cursor-pointer mb-[10px]">
                    Continue with email
                </button>
            </div>
            <div className="right-column bg-gray-700 ">
                <img
                    src="/Group1.svg"
                    width={800}
                    height={450}
                    alt="Video"
                    className="mx-auto cursor-pointer"
                />
            </div>
            <style jsx>{`
                .left-column {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .right-column {
                    flex: 2;
                    display: flex;

                    align-items: center;
                    justify-content: center;
                }

                .subtitle {
                    font-size: 18px;
                    margin-bottom: 10px;
                }

                .button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 20px;
                    background-color: #4285f4;
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-bottom: 10px;
                }

                .divider {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 20px 0;
                    color: #999;
                    font-size: 16px;
                }
                .continue-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 20px;
                    background-color: #4285f4;
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    )
}

export default Signup

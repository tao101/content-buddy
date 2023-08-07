import useProtectedRoute from '@/hooks/useProtectedRoute'
import { AppState, appDispatch } from '@/store'
import { signOutUser } from '@/store/features/auth'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineOutput } from 'react-icons/md'
import 'react-toastify/dist/ReactToastify.css'
import SettingsTable from './settingsTable'
import Response from './response'

export default function Extension() {
    useProtectedRoute()

    const auth = useSelector((state: AppState) => state.auth)

    let user = JSON.stringify(auth.user, null, 2)
    const [isSelected, setIsSelected] = useState('settings')
    const [isResponseClicked, setIsResponseClicked] = useState(false)
    const [response, setResponse] = useState('')

    const handleResponseClick = () => {
        setIsResponseClicked(true)
        setTimeout(() => {
            setIsResponseClicked(false)
        }, 200)
    }
    return (
        <div className="lg:max-w-[70%] md:w-[90%] w-full flex flex-col h-full  mx-auto ">
            <div className="flex flex-row w-full   ">
                <div
                    onClick={() => setIsSelected('settings')}
                    className={`flex flex-col w-full justify-center items-center py-4 cursor-pointer ${
                        isSelected == 'settings'
                            ? ' border-b border-b-[2px]'
                            : ''
                    } `}
                >
                    <img
                        src="/setting.svg"
                        className="fill-blue-300 w-[20px] h-[20px] mb-2"
                    />
                    <div className="text-sm">Prompt Settings</div>
                </div>
                <div
                    onClick={handleResponseClick}
                    className={`flex flex-col w-full justify-center items-center py-4 cursor-pointer ${
                        isSelected == 'response'
                            ? ' border-b border-b-[2px]'
                            : ''
                    } `}
                >
                    <MdOutlineOutput
                        className={`${
                            isSelected == 'response'
                                ? 'text-white'
                                : ' text-gray-500'
                        } " w-[25px] h-[25px] mb-2 " `}
                    />
                    <div
                        className={`${
                            isSelected == 'response'
                                ? 'text-white'
                                : ' text-gray-500'
                        } text-sm `}
                    >
                        {' '}
                        Response
                    </div>
                </div>
            </div>
            <div className="h-full flex-1 flex flex-col w-full justify-center items-start">
                {isSelected == 'settings' ? (
                    <SettingsTable
                        setIsSelected={setIsSelected}
                        isResponseClicked={isResponseClicked}
                        setResponse={setResponse}
                    />
                ) : (
                    <Response
                        setIsSelected={setIsSelected}
                        response={response}
                    />
                )}
            </div>
        </div>
    )
}

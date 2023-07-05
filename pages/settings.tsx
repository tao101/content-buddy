import Header from '@/components/header'
import useProtectedRoute from '@/hooks/useProtectedRoute'
import { AppState } from '@/store'
import {
    setModel,
    setOpenAIKey,
    settingState,
    supportedModels,
} from '@/store/features/settings'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Settings() {
    const [keyVisible, setKeyVisible] = useState(false)
    const settings = useSelector(settingState)
    const dispatch = useDispatch()
    useProtectedRoute()

    console.log(settings)

    const onKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setOpenAIKey(e.target.value))
    }

    const onModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setModel(e.target.value))
    }

    return (
        <main className=" w-full min-h-screen  ">
            <Header />
            <div className="p-5 mx-auto max-w-[500px]">
                <h1 className="mb-10"> Settings</h1>
                <div>
                    <label
                        htmlFor="apiKey"
                        className="block mb-2   text-sm font-medium text-gray-900 "
                    >
                        OpenAI API KEY
                    </label>
                    <div className="relative flex items-center">
                        <div
                            onClick={() => setKeyVisible(!keyVisible)}
                            className="absolute right-0.5"
                        >
                            {!keyVisible ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            )}
                        </div>
                        <input
                            value={settings.openAIKey}
                            onChange={onKeyChange}
                            type={keyVisible ? 'text' : 'password'}
                            id="apiKey"
                            className="bg-gray-50 border flex-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Your OpenAI API KEY"
                            required
                        />
                    </div>
                </div>
                <div className="mt-2.5">
                    <label
                        htmlFor="models"
                        className="block mb-2   text-sm font-medium text-gray-900 "
                    >
                        OpenAI Model (for gpt-4 you need to have access to it)
                    </label>
                    <select
                        id="models"
                        className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={settings.model}
                        onChange={onModelChange}
                    >
                        <option selected>Choose a Model</option>
                        {supportedModels.map((model) => (
                            <option key={model} value={model}>
                                {model}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </main>
    )
}

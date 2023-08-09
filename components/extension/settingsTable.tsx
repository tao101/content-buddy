import CreatableSelect from 'react-select/creatable'
import useProtectedRoute from '@/hooks/useProtectedRoute'
import { AppState, appDispatch } from '@/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RingLoader } from 'react-spinners'
import { css } from '@emotion/react'

import { addLanguage, addStyle, addType } from '@/store/features/settings'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export default function SettingsTable({
    isResponseClicked,
    setIsSelected,
    setResponse,
}: {
    setIsSelected: any
    isResponseClicked: Boolean
    setResponse: any
}) {
    const [selectedLanguage, setSelectedLangauge] = useState<
        '' | { value: string; label: string }
    >()
    const [selectedStyle, setSelectedStyle] = useState<
        '' | { value: string; label: string }
    >('')
    const [selectedType, setSelectedType] = useState<
        '' | { value: string; label: string }
    >('')
    const { languages, styles, types } = useSelector(
        (state: AppState) => state.settings
    )
    useProtectedRoute()
    //const languages = ['Arabic', 'French', 'Chineese', 'Russian']
    //const styles = ['Formal', 'Casual', 'Super duper formal']
    //const types = ['Blog', 'Article', 'Social media post', 'Add one']

    const [isLoading, setIsLoading] = useState(false)

    const [Instructions, setInstructions] = useState('')
    const [textToRewrite, setTextToRewrite] = useState('')
    const [textToReply, setTextToReply] = useState('')

    const [isLanguageValid, setIsLanguageValid] = useState(false)
    const [isStyleValid, setIsStyleValid] = useState(false)
    const [isTypeValid, setIsTypeValid] = useState(false)
    const [isTextValid, setIsTextValid] = useState(false)

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        try {
            if (!isLanguageValid) {
                toast('Output Language is required!', {
                    position: toast.POSITION.TOP_RIGHT,
                })
                return
            }
            if (!isStyleValid) {
                toast('Output Style is required!', {
                    position: toast.POSITION.TOP_RIGHT,
                })
                return
            }
            if (!isTypeValid) {
                toast('Output Type is required!', {
                    position: toast.POSITION.TOP_RIGHT,
                })
                return
            }
            if (!isTextValid) {
                toast('Output Text is required!', {
                    position: toast.POSITION.TOP_RIGHT,
                })
                return
            }
            if (actionSelected == 'write' || actionSelected == 'custom gpt') {
                setIsLoading(true)
                let response = await axios.post('api/write', {
                    selectedType: selectedType,
                    selectedLanguage: selectedLanguage,
                    selectedStyle: selectedStyle,
                    Instructions: Instructions,
                })

                let botResponse = response.data.result.content

                setResponse(botResponse)
                // setIsLoading(false)
            } else if (actionSelected == 'rewrite') {
                let response = await axios.post('api/rewrite', {
                    selectedType: selectedType,
                    selectedLanguage: selectedLanguage,
                    selectedStyle: selectedStyle,
                    textToRewrite: textToRewrite,
                    Instructions: Instructions,
                })

                let botResponse = response.data.result.content

                setResponse(botResponse)
            } else if (actionSelected == 'reply') {
                let response = await axios.post('api/reply', {
                    selectedType: selectedType,
                    selectedLanguage: selectedLanguage,
                    selectedStyle: selectedStyle,
                    textToReply: textToReply,
                    Instructions: Instructions,
                })

                let botResponse = response.data.result.content

                setResponse(botResponse)
            }

            setIsSelected('response')
            setInstructions('')
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const [actionSelected, setActionSelected] = useState('write')

    const dispatch = appDispatch()

    const customGptClick = () => {
        setActionSelected('custom gpt')
        toast('Comming soon!', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    // const handleStyleChange = (selectedOption: String) => {
    //     if (selectedOption) {
    //         // Do something with the selected style
    //         console.log(selectedOption.value)
    //     }
    // }
    const customStyles = {
        placeholder: (provided: any) => ({
            ...provided,
            color: '#ffffff',
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: '#ffffff',
        }),

        control: (provided: any) => ({
            ...provided,
            backgroundColor: '#000000',
            color: '#ffffff',
            borderColor: '#444446',
        }),
        menu: (provided: any) => ({
            ...provided,
            backgroundColor: '#000000',
            color: '#ffffff',
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            color: state.isFocused ? '#000000' : '#ffffff',
            backgroundColor: state.isFocused ? '#ffffff' : '#000000',
            cursor: 'pointer',
        }),
        input: (provided: any) => ({
            ...provided,
            color: '#ffffff',
        }),
    }

    const onLanguageChange = (option: any) => {
        setSelectedLangauge(option.value)
        setIsLanguageValid(true)
    }
    const onStyleChange = (option: any) => {
        setSelectedStyle(option.value)
        console.log('style changed ', selectedStyle)
        setIsStyleValid(true)
    }
    const onTypeChange = (option: any) => {
        setSelectedType(option.value)
        setIsTypeValid(true)
    }

    const onCreateLanguage = (newOption: any) => {
        dispatch(addLanguage(newOption?.value))
        setSelectedLangauge(newOption?.value)
    }
    const onCreateStyle = (newOption: any) => {
        dispatch(addStyle(newOption))
        setSelectedStyle({
            value: newOption,
            label: newOption,
        })
    }
    const onCreateType = (newOption: any) => {
        dispatch(addType(newOption?.value))
        setSelectedType({
            value: newOption,
            label: newOption,
        })
    }

    return (
        <>
            <div className="  flex flex-col h-full w-full mx-auto">
                <div className="relative inline-block text-left w-full my-2">
                    <div>
                        <CreatableSelect
                            options={languages.map((language: string) => ({
                                value: language,
                                label: language,
                            }))}
                            placeholder="Output Language..."
                            styles={customStyles}
                            onCreateOption={onCreateLanguage}
                            value={selectedLanguage}
                            onChange={onLanguageChange}
                        />
                    </div>

                    <div className="flex flex-col"></div>
                </div>
                <div className="flex flex-row w-full gap-2  ">
                    <div
                        onClick={() => setActionSelected('write')}
                        className={`flex-1 cursor-pointer text-center px-2 gap-x-1.5 rounded-md py-2 text-sm font-semibold text-gray-900 shadow-sm  ${
                            actionSelected == 'write'
                                ? 'bg-white text-gray-500 '
                                : '  bg-black border border-mygray hover:border-gray-500 text-white '
                        }`}
                    >
                        Write
                    </div>
                    <div
                        onClick={() => setActionSelected('rewrite')}
                        className={`flex-1 cursor-pointer text-center px-2 gap-x-1.5 rounded-md py-2 text-sm font-semibold text-gray-900 shadow-sm  ${
                            actionSelected == 'rewrite'
                                ? 'bg-white text-gray-500 border border-gray-300'
                                : ' bg-black border border-mygray hover:border-gray-500 text-white '
                        }`}
                    >
                        Rewrite
                    </div>
                    <div
                        onClick={() => setActionSelected('reply')}
                        className={`flex-1 cursor-pointer text-center px-2 gap-x-1.5 rounded-md py-2 text-sm font-semibold text-gray-900 shadow-sm  ${
                            actionSelected == 'reply'
                                ? 'bg-white text-gray-500 border border-gray-300'
                                : ' bg-black border border-mygray hover:border-gray-500 text-white'
                        }`}
                    >
                        Reply
                    </div>
                    <div
                        onClick={customGptClick}
                        className={`flex-1 cursor-pointer text-center px-2 gap-x-1.5 rounded-md py-2 text-sm font-semibold text-gray-900 shadow-sm  ${
                            actionSelected == 'custom gpt'
                                ? 'bg-white text-gray-500 border border-gray-300'
                                : ' bg-black border border-mygray hover:border-gray-500 text-white'
                        }`}
                    >
                        Custom gpt
                    </div>
                </div>
                <div className="relative inline-block text-left w-full mt-2">
                    <div>
                        <CreatableSelect
                            options={styles.map((style: string) => ({
                                value: style,
                                label: style,
                            }))}
                            placeholder="Output style..."
                            isClearable
                            styles={customStyles}
                            onCreateOption={onCreateStyle}
                            value={selectedStyle}
                            onChange={onStyleChange}
                        />
                    </div>

                    <div className="flex flex-col"></div>
                </div>
                <div className="relative inline-block text-left w-full my-2">
                    <div>
                        <CreatableSelect
                            isClearable
                            options={types.map((type: string) => ({
                                value: type,
                                label: type,
                            }))}
                            placeholder="Output type..."
                            styles={customStyles}
                            onCreateOption={onCreateType}
                            value={selectedType}
                            onChange={onTypeChange}
                        />
                    </div>
                </div>
                {actionSelected == 'reply' && (
                    <div className="flex flex-col h-full gap-2 ">
                        <textarea
                            required
                            value={textToReply}
                            onChange={(e) => setTextToReply(e.target.value)}
                            placeholder="Content to reply ..."
                            className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-mygray text-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        />
                        <textarea
                            required
                            value={Instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            placeholder="Instructions to reply ..."
                            className="flex-1 px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-mygray text-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        />
                    </div>
                )}
                {actionSelected == 'rewrite' && (
                    <div className="flex flex-col h-full gap-2 ">
                        <textarea
                            required
                            value={textToRewrite}
                            onChange={(e) => setTextToRewrite(e.target.value)}
                            placeholder="Content to rewrite ..."
                            className=" px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-mygray text-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        />
                        <textarea
                            required
                            value={Instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            placeholder="Instructions to rewrite ..."
                            className="flex-1 px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-mygray text-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        />
                    </div>
                )}
                {(actionSelected == 'write' ||
                    actionSelected == 'custom gpt') && (
                    <textarea
                        required
                        value={Instructions}
                        onChange={(e) => {
                            setInstructions(e.target.value)
                            setIsTextValid(true)
                        }}
                        placeholder="Describe your desired output"
                        className="flex-1 px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-mygray text-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    />
                )}
            </div>
            {isLoading ? (
                <div className="flex items-center justify-center mx-auto my-6">
                    {/* Use a loading spinner or any other loading indicator here */}
                    {/* <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white-500"></div> */}
                    <RingLoader
                        color={'#ffffff'}
                        loading={isLoading}
                        size={50}
                    />
                </div>
            ) : (
                <button
                    onClick={(e) => handleSubmit(e)}
                    className={`${
                        isResponseClicked ? 'transform scale-110' : ''
                    } mx-auto py-2 px-10 my-2 bg-secondary text-white border-0 border-white rounded-md mt-4 mb-6`}
                    disabled={isLoading}
                >
                    {' '}
                    {
                        <>
                            {isResponseClicked && (
                                <div
                                    className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-60 rounded-md overflow-hidden "
                                    style={{ zIndex: 1 }}
                                ></div>
                            )}
                            Next
                        </>
                    }
                </button>
            )}
        </>
    )
}

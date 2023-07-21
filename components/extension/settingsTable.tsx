import CreatableSelect from 'react-select/creatable'
import useProtectedRoute from '@/hooks/useProtectedRoute'
import { AppState, appDispatch } from '@/store'
import { signOutUser } from '@/store/features/auth'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { IoCopyOutline } from 'react-icons/io5'
import { FiEdit2 } from 'react-icons/Fi'
import { MdEditOff, MdOutlineOutput } from 'react-icons/md'

import { addLanguage, addStyle, addType } from '@/store/features/settings'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SettingsTable({
    isResponseClicked,
    setIsSelected,
}: {
    setIsSelected: any
    isResponseClicked: Boolean
}) {
    const [selectedLanguage, setSelectedLangauge] = useState<
        '' | { value: string; label: string }
    >('')
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
        setSelectedLangauge(option)
    }
    const onStyleChange = (option: any) => {
        setSelectedStyle(option)
    }
    const onTypeChange = (option: any) => {
        setSelectedType(option)
    }

    const onCreateLanguage = (newOption: any) => {
        dispatch(addLanguage(newOption))
        setSelectedLangauge({
            value: newOption,
            label: newOption,
        })
    }
    const onCreateStyle = (newOption: any) => {
        dispatch(addStyle(newOption))
        setSelectedLangauge({
            value: newOption,
            label: newOption,
        })
    }
    const onCreateType = (newOption: any) => {
        dispatch(addType(newOption))
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
                            placeholder="Output language"
                            isClearable
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
                            placeholder="Output style"
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
                            options={types.map((type: string) => ({
                                value: type,
                                label: type,
                            }))}
                            placeholder="Output type"
                            isClearable
                            styles={customStyles}
                            onCreateOption={onCreateType}
                            value={selectedType}
                            onChange={onTypeChange}
                        />
                    </div>

                    <div className="flex flex-col"></div>
                </div>
                {actionSelected == 'reply' && (
                    <div className="flex flex-col h-full gap-2 ">
                        <textarea
                            placeholder="Content to reply ..."
                            className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-mygray text-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        />
                        <textarea
                            placeholder="Instructions to reply ..."
                            className="flex-1 px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-mygray text-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        />
                    </div>
                )}
                {actionSelected == 'rewrite' && (
                    <div className="flex flex-col h-full gap-2 ">
                        <textarea
                            placeholder="Content to rewrite ..."
                            className=" px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-mygray text-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        />
                        <textarea
                            placeholder="Instructions to rewrite ..."
                            className="flex-1 px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-mygray text-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        />
                    </div>
                )}
                {(actionSelected == 'write' ||
                    actionSelected == 'custom gpt') && (
                    <textarea
                        placeholder="Describe your desired output"
                        className="flex-1 px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-mygray text-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    />
                )}
            </div>
            <button
                onClick={() => setIsSelected('response')}
                className={`${
                    isResponseClicked ? 'transform scale-110' : ''
                } mx-auto py-2 px-10 my-2 bg-secondary text-white border-0 border-white rounded-md mt-4 mb-6`}
            >
                {isResponseClicked && (
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-60 rounded-md overflow-hidden "
                        style={{ zIndex: 1 }}
                    ></div>
                )}
                Next
            </button>
        </>
    )
}

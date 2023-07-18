import Header from '@/components/header'
import useProtectedRoute from '@/hooks/useProtectedRoute'
import { AppState, appDispatch, appSelector } from '@/store'
import { signOutUser } from '@/store/features/auth'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { IoCopyOutline } from 'react-icons/io5'
import { FiEdit2 } from 'react-icons/Fi'
import CreatableSelect from 'react-select/creatable'

export default function Welcome() {
    useProtectedRoute()
    const auth = useSelector((state: AppState) => state.auth)
    const dispatch = appDispatch()

    const onLogout = () => {
        dispatch(signOutUser())
    }
    let initialContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scel erisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in congue sapien.Suspendisse id semper ex. Phasellus ornare, felis a accumsan placerat, neque justo suscipiterat, sed porta sem lectus sed nisi. Nullaconsequat ultrices velit, vitae bibendum ligulatincidunt sed. Nulla ullamcorper odio id arcualiquet, in elementum nisi interdum. Nampulvinar iaculis mattis. Donec et turpis lacus.Sed et ante ac lectus dictum finibus. Donecneque enim, maximus scelerisque dui euismod,mollis consectetur libero. Donec sed bibendumfelis. Aenean ultricies turpis ante, quielementum nulla fringilla sit amet. Sed vehiculahendrerit interdum. Praesent iaculis at nisl velauctor. In malesuada pretium volutpat. Duisscelerisque orci vitae egestas cursus. Integermollis libero. Orci varius natoque penatibus.'

    let user = JSON.stringify(auth.user, null, 2)
    const [isSelected, setIsSelected] = useState('settings')
    const [onShowLanguageDropDown, setOnShowLanguageDropDown] = useState(false)
    const [onShowStyleDropDown, setOnShowStyleDropDown] = useState(false)
    const [onShowTypeDropDown, setOnShowTypeDropDown] = useState(false)
    const [actionSelected, setActionSelected] = useState('write')
    const [content, setContent] = useState(initialContent)
    const [isEditing, setIsEditing] = useState(false)
    const [showCopiedAlert, setShowCopiedAlert] = useState(false)

    const handleCopyClick = () => {
        navigator.clipboard.writeText(content)
        setShowCopiedAlert(true)
        setTimeout(() => {
            setShowCopiedAlert(false)
        }, 1500)
    }

    // const handleStyleChange = (selectedOption: String) => {
    //     if (selectedOption) {
    //         // Do something with the selected style
    //         console.log(selectedOption.value)
    //     }
    // }

    const languages = ['Arabic', 'French', 'Chineese', 'Russian']
    const styles = ['Formal', 'Casual', 'Super duper formal']
    const types = ['Blog', 'Article', 'Social media post', 'Add one']
    return (
        <div className=" bg-primary w-full min-h-screen text-white md:px-12 px-4 h-full">
            <Header />
            <div className="lg:max-w-[70%] md:w-[90%] mx-auto ">
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
                        className={`flex flex-col w-full justify-center items-center py-4 cursor-pointer ${
                            isSelected == 'response'
                                ? ' border-b border-b-[2px]'
                                : ''
                        } `}
                    >
                        <img
                            src="/response.svg"
                            className=" w-[20px] h-[20px] mb-2"
                        />
                        <div className="text-sm"> Response</div>
                    </div>
                </div>

                {isSelected == 'settings' ? (
                    <div className="  mx-auto my-auto h-full flex flex-col h-full justify-center items-center space-between">
                        <div className="relative inline-block text-left w-full my-2">
                            <div>
                                <CreatableSelect
                                    options={languages.map((language) => ({
                                        value: language,
                                        label: language,
                                    }))}
                                    placeholder="Output language"
                                    isClearable
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
                                        : '  bg-mygray text-white '
                                }`}
                            >
                                Write
                            </div>
                            <div
                                onClick={() => setActionSelected('rewrite')}
                                className={`flex-1 cursor-pointer text-center px-2 gap-x-1.5 rounded-md py-2 text-sm font-semibold text-gray-900 shadow-sm  ${
                                    actionSelected == 'rewrite'
                                        ? 'bg-white text-gray-500 border border-gray-300'
                                        : ' bg-mygray text-white '
                                }`}
                            >
                                Rewrite
                            </div>
                            <div
                                onClick={() => setActionSelected('reply')}
                                className={`flex-1 cursor-pointer text-center px-2 gap-x-1.5 rounded-md py-2 text-sm font-semibold text-gray-900 shadow-sm  ${
                                    actionSelected == 'reply'
                                        ? 'bg-white text-gray-500 border border-gray-300'
                                        : '  bg-mygray text-white'
                                }`}
                            >
                                Reply
                            </div>
                            <div
                                onClick={() => setActionSelected('custom gpt')}
                                className={`flex-1 cursor-pointer text-center px-2 gap-x-1.5 rounded-md py-2 text-sm font-semibold text-gray-900 shadow-sm  ${
                                    actionSelected == 'custom gpt'
                                        ? 'bg-white text-gray-500 border border-gray-300'
                                        : '  bg-mygray text-white'
                                }`}
                            >
                                Custom gpt
                            </div>
                        </div>
                        <div className="relative inline-block text-left w-full mt-2">
                            <div>
                                <CreatableSelect
                                    options={styles.map((style) => ({
                                        value: style,
                                        label: style,
                                    }))}
                                    placeholder="Style"
                                    isClearable
                                />
                            </div>

                            <div className="flex flex-col"></div>
                        </div>
                        <div className="relative inline-block text-left w-full my-2">
                            <div>
                                <CreatableSelect
                                    options={types.map((type) => ({
                                        value: type,
                                        label: type,
                                    }))}
                                    placeholder="Type"
                                    isClearable
                                />
                            </div>

                            <div className="flex flex-col"></div>
                        </div>
                        <textarea
                            placeholder="Describe your desired output"
                            rows="5"
                            className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-mygray text-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        />
                        <button
                            onClick={() => setIsSelected('response')}
                            className=" py-2 px-10 my-2 bg-secondary text-white  border-0 border-white rounded-md bottom-0"
                        >
                            Next
                        </button>
                    </div>
                ) : (
                    <div className="h-full flex flex-col">
                        <div className=" text-gray-300 overflow-auto border border-white h-[65vh] my-2 px-6 py-4 text-justify relative bg-black rounded  border-1  outline-0 focus:outline-none focus:ring-0 w-full mx-auto text-gray-300 pt-10">
                            <div className="flex flex-row justify-end gap-4 mb-4">
                                {showCopiedAlert && (
                                    <div>Content copied to clipboard!</div>
                                )}
                                <IoCopyOutline
                                    onClick={handleCopyClick}
                                    className="cursor-pointer  h-6 w-6"
                                />
                                <FiEdit2
                                    onClick={() => setIsEditing(true)}
                                    className="cursor-pointer  h-6 w-6"
                                />
                            </div>
                            {isEditing ? (
                                <textarea
                                    spellCheck={false} // Disable spellcheck
                                    autoCorrect="off"
                                    className=" text-gray-300 w-full h-full bg-black outline-0 focus:outline-none "
                                >
                                    {content}
                                </textarea>
                            ) : (
                                <div className=" text-gray-300 ">{content}</div>
                            )}
                        </div>

                        <button
                            onClick={() => setIsSelected('settings')}
                            className=" py-2 px-6 my-2 bg-secondary text-white w-fit mx-auto border border-white rounded-md bottom-0"
                        >
                            Generate new
                        </button>
                    </div>
                )}
            </div>

            {/* <div onClick={() => onLogout()}>logout</div> */}
        </div>
    )
}

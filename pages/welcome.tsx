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
    let user = JSON.stringify(auth.user, null, 2)
    const [isSelected, setIsSelected] = useState('settings')
    const [onShowLanguageDropDown, setOnShowLanguageDropDown] = useState(false)
    const [onShowStyleDropDown, setOnShowStyleDropDown] = useState(false)
    const [onShowTypeDropDown, setOnShowTypeDropDown] = useState(false)
    const [actionSelected, setActionSelected] = useState('write')

    const customStyles = {
        control: () => ({
            background: '#023950',
            // match with the menu
            borderRadius: '3px 3px 0 0',
            // Overwrittes the different states of border
            borderColor: 'yellow',
            // Removes weird border around container
            boxShadow: null,
            '&:hover': {
                // Overwrittes the different states of border
                borderColor: 'red',
            },
        }),
        menu: () => ({
            // override border radius to match the box
            borderRadius: 0,
            // kill the gap
            marginTop: 0,
        }),
        menuList: () => ({
            // kill the white space on first and last option
            padding: 0,
        }),
    }

    const handleStyleDropdownClick = () => {
        setOnShowTypeDropDown(false)
        setOnShowLanguageDropDown(false)
    }
    const handleTypeDropdownClick = () => {
        setOnShowTypeDropDown(!onShowTypeDropDown)
        setOnShowStyleDropDown(false)
        setOnShowLanguageDropDown(false)
    }
    const handleLanguageDropdownClick = () => {
        setOnShowLanguageDropDown(!onShowLanguageDropDown)
        setOnShowStyleDropDown(false)
        setOnShowTypeDropDown(false)
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
                        <div className=" overflow-auto border border-white h-[65vh] my-2 px-6 py-4 text-justify relative bg-black rounded  border-1  outline-0 focus:outline-none focus:ring-0 md:w-[95%] mx-auto text-gray-300 pt-10">
                            <div className="flex flex-row justify-end mb-4">
                                <IoCopyOutline className="cursor-pointer mr-3 h-6 w-6" />
                                <FiEdit2 className="cursor-pointer  h-6 w-6" />
                            </div>
                            <div className=" text-gray-300 ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Cras in congue sapien.
                                Suspendisse id semper ex. Phasellus ornare,
                                felis a accumsan placerat, neque justo suscipit
                                erat, sed porta sem lectus sed nisi. Nulla
                                consequat ultrices velit, vitae bibendum ligula
                                tincidunt sed. Nulla ullamcorper odio id arcu
                                aliquet, in elementum nisi interdum. Nam
                                pulvinar iaculis mattis. Donec et turpis lacus.
                                Sed et ante ac lectus dictum finibus. Donec
                                neque enim, maximus scelerisque dui euismod,
                                mollis consectetur libero. Donec sed bibendum
                                felis. Aenean ultricies turpis ante, quis
                                elementum nulla fringilla sit amet. Sed vehicula
                                hendrerit interdum. Praesent iaculis at nisl vel
                                auctor. In malesuada pretium volutpat. Duis
                                scelerisque orci vitae egestas cursus. Integer
                                ut mollis libero. Orci varius natoque penatibus
                                et magnis dis parturient montes, nascetur
                                ridiculus mus. Praesent congue nisl et lacinia
                                facilisis. Sed et dolor quis mauris molestie
                                congue in eu libero. Aliquam tincidunt ligula
                                molestie, ultrices enim ut, auctor sem. Praesent
                                vehicula vehicula nisl euismod euismod. Mauris
                                pulvinar finibus nisl, eu pretium enim cursus
                                eget. Vestibulum ante ipsum primis in faucibus
                                orci luctus et ultrices posuere cubilia curae;
                                Sed iaculis augue nibh, et tempor lorem
                                tincidunt a. Fusce feugiat est nec tincidunt
                                commodo. Aliquam augue mi, consectetur ac ipsum
                                vel, dignissim sollicitudin purus. Nunc
                                venenatis varius enim, non ultrices massa
                                egestas id. Integer sagittis lacinia magna,
                                maximus mollis lorem porttitor iaculis. Integer
                                eget congue eros, at ultricies mi. Fusce euismod
                                sed arcu in dictum. Fusce a neque molestie est
                                ultrices eleifend at ac odio. Sed a dui nisi. In
                                auctor malesuada mattis. Maecenas vitae sagittis
                                lacus. Nunc lacinia orci vitae dictum porttitor.
                                Maecenas luctus nisl eget odio cursus maximus.
                                Morbi eleifend dui quam, ac iaculis dolor
                                imperdiet vitae. Curabitur aliquam arcu sed
                                feugiat convallis. Fusce sit amet iaculis
                                tellus, non sollicitudin neque. Nunc pretium
                                aliquam lorem nec eleifend. Vestibulum vel ex
                                lectus. Nulla facilisi. Nam tristique, justo id
                                finibus ultricies, mi sapien suscipit massa,
                                vitae tincidunt arcu dolor et nisl. In
                                venenatis, leo id lacinia vestibulum, neque
                                tellus volutpat lacus, at sodales nisl augue et
                                tortor. Etiam congue mi lacus, et molestie arcu
                                placerat congue. Aliquam erat volutpat. Donec
                                consequat, magna vel consectetur varius, purus
                                ante mollis magna, vel efficitur sem ipsum in
                                leo. Vestibulum tempor, nulla at tincidunt
                                ultricies, purus sapien porta magna, eu suscipit
                                libero orci ut tortor. Donec ut lobortis nibh,
                                quis fringilla lacus. Maecenas sit amet risus ac
                                erat pellentesque interdum ac non sem. Donec
                                faucibus enim ac dui convallis rhoncus. Vivamus
                                faucibus felis et lorem consequat facilisis.
                                Donec vel dui mi. Vivamus laoreet suscipit arcu,
                                at finibus ipsum. Vivamus ornare nisl sit amet
                                laoreet dapibus. Sed sed dignissim dolor. Nulla
                                porttitor, purus quis consectetur ultricies,
                                urna lacus aliquam augue, id scelerisque ligula
                                risus sit amet velit. Quisque in dui et dolor
                                fringilla aliquet id vitae nunc.
                            </div>
                        </div>

                        <button
                            onClick={() => setIsSelected('response')}
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

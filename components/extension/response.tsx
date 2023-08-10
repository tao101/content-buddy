import { AppState, appDispatch } from '@/store'
import { signOutUser } from '@/store/features/auth'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { IoCopyOutline } from 'react-icons/io5'
import { FiEdit2 } from 'react-icons/fi'
import { MdEditOff } from 'react-icons/md'
export default function Response({
    setIsSelected,
    response,
}: {
    setIsSelected: any
    response: string
}) {
    const auth = useSelector((state: AppState) => state.auth)

    let initialContent = response

    let user = JSON.stringify(auth.user, null, 2)
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

    return (
        <div className="h-full w-full flex flex-col">
            <div className=" text-gray-300 overflow-auto border border-white h-[65vh] my-2 px-6 py-4 text-justify relative bg-black rounded  border-1  outline-0 focus:outline-none focus:ring-0 w-full mx-auto text-gray-300 pt-10">
                <div className="flex flex-row justify-end gap-4 mb-4">
                    {showCopiedAlert && <div>Copied!</div>}
                    <IoCopyOutline
                        onClick={handleCopyClick}
                        className="cursor-pointer  h-6 w-6"
                    />
                    <FiEdit2
                        onClick={() => setIsEditing(false)}
                        className={` ${
                            isEditing ? 'cursor-pointer h-6 w-6' : 'hidden'
                        } `}
                    />
                    <MdEditOff
                        onClick={() => setIsEditing(true)}
                        className={` ${
                            !isEditing ? 'cursor-pointer h-6 w-6' : 'hidden'
                        } `}
                    />
                </div>
                {isEditing ? (
                    <textarea
                        spellCheck={false} // Disable spellcheck
                        autoCorrect="off"
                        className=" text-gray-300 bg-black w-[100%] h-full outline-0 focus:outline-none text-justify "
                    >
                        {content}
                    </textarea>
                ) : (
                    <div className="w-full h-full bg-black outline-0 focus:outline-none text-gray-300 text-justify ">
                        {content}
                    </div>
                )}
            </div>

            <button
                onClick={() => setIsSelected('settings')}
                className=" py-2 px-6 my-2 bg-secondary text-white w-fit mx-auto border border-white rounded-md bottom-0"
            >
                Generate new
            </button>
        </div>
    )
}

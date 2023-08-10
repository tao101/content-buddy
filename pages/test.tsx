import axios from 'axios'
import { useState } from 'react'
export default function Test() {
    const [inputValue, setInputValue] = useState('')
    const [chatLog, setChatLog] = useState<{ role: string; message: string }[]>(
        []
    )
    const handleSubmit = async (event: any) => {
        event.preventDefault()

        setChatLog((prevChatLog) => [
            ...prevChatLog,
            { role: 'user', message: inputValue },
        ])
        setInputValue('')
        try {
            let response = await axios.post('api/write', {
                content: inputValue,
            })
            console.log(response.data.result.content)
            let botResponse = response.data.result.content

            setChatLog((prevChatLog) => [
                ...prevChatLog,
                { role: 'bot', message: botResponse },
            ])
            setInputValue('')
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {chatLog.map((chat, index) => {
                    return <p key={index}>{chat.message}</p>
                })}
                <input
                    placeholder="Say something..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">send</button>
            </form>
        </div>
    )
}

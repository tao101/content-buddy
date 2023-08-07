const { Configuration, OpenAIApi } = require('openai')
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == 'POST') {
        try {
            const configuration = new Configuration({
                apiKey: process.env.OPENAI_API_KEY,
            })
            const openai = new OpenAIApi(configuration)
            const selectedType = req.body.selectedType
            const selectedLanguage = req.body.selectedLanguage
            const selectedStyle = req.body.selectedStyle
            const textToRewrite = req.body.textToRewrite
            const Instructions = req.body.Instructions

            const userMessage = `rewrite this : " ${textToRewrite} "in ${selectedLanguage} in a ${selectedStyle} style, it is a ${selectedType}.follow this instructions: ${Instructions}`
            const chatCompletion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userMessage }],
            })
            res.status(200).json({
                status: true,
                result: chatCompletion.data.choices[0].message,
            })
        } catch (error) {
            res.status(500).json({ message: 'something went wrong' })
        }
    } else {
        res.status(405).json({ message: 'method should be POST' })
    }
}

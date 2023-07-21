import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '../../index'

export const supportedModels = [
    'gpt-3.5-turbo',
    'gpt-3.5-turbo-0301',
    'gpt-4',
    'gpt-4-0314',
]

export const languages = ['Arabic', 'French', 'Chinese', 'Russian']
export const styles = ['Formal', 'Casual']
export const types = ['Blog', 'Article', 'Social media post']

export interface SettingsState {
    openAIKey: string
    model: (typeof supportedModels)[number]
    languages: string[]
    styles: string[]
    types: string[]
}

const initialState: SettingsState = {
    openAIKey: '',
    model: supportedModels[0],
    languages,
    styles,
    types,
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setOpenAIKey(state, action: PayloadAction<string>) {
            state.openAIKey = action.payload
        },
        setModel(state, action: PayloadAction<SettingsState['model']>) {
            state.model = action.payload
        },
        setLanguages(state, action: PayloadAction<string[]>) {
            state.languages = action.payload
        },
        setStyles(state, action: PayloadAction<string[]>) {
            state.styles = action.payload
        },
        setTypes(state, action: PayloadAction<string[]>) {
            state.types = action.payload
        },
        addLanguage(state, action: PayloadAction<string>) {
            state.languages = state.languages.concat(action.payload)
        },
        addStyle(state, action: PayloadAction<string>) {
            state.styles = state.styles.concat(action.payload)
        },
        addType(state, action: PayloadAction<string>) {
            state.types = state.types.concat(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: any) => {
            return {
                ...state,
                ...action.payload.settings,
            }
        })
    },
})

export const {
    setOpenAIKey,
    setModel,
    addLanguage,
    addStyle,
    addType,
    setTypes,
    setStyles,
    setLanguages,
} = settingsSlice.actions

export const settingState = (state: AppState) => state.settings

export default settingsSlice.reducer

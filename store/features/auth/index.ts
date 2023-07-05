import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../../index'
import { HYDRATE } from 'next-redux-wrapper'
import { User } from '@firebase/auth'

// Type for our state
export interface AuthState {
    loading: boolean
    user: User | null
}

// Initial state
const initialState: AuthState = {
    loading: false,
    user: null,
}

// Actual Slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Action to set the authentication status
        setLoading(state, action: PayloadAction<{ loading: boolean }>) {
            return {
                ...state,
                loading: action.payload.loading,
            }
        },
        setUser(state, action: PayloadAction<User | null>) {
            return {
                loading: false,
                user: action.payload,
            }
        },
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: any) => {
            return {
                ...state,
                ...action.payload.auth,
            }
        })
    },
})

export const { setLoading, setUser } = authSlice.actions

export const selectAuthState = (state: AppState) => state.auth.authState

export default authSlice.reducer

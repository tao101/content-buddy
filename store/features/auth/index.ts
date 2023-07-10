import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../../index'
import { HYDRATE } from 'next-redux-wrapper'
import { User } from '@firebase/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '@/services/firebase'

// Action to sign in with Google
export const signInWithGoogle = createAsyncThunk(
    'auth/signInWithGoogle',
    async () => {
        try {
            const googleAuth = new GoogleAuthProvider()

            let { user } = await signInWithPopup(auth, googleAuth)
            if (user) {
                return user
            } else {
                return null
            }
        } catch (error) {
            console.log('auth/signInWithGoogle error ', error)
            return null
        }
    }
)
export const signInWithPassword = createAsyncThunk(
    'auth/signInWithPassword',
    async ({ email, password }: { email: string; password: string }) => {
        try {
            let userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            if (userCredential.user) {
                return userCredential.user
            } else {
                return null
            }
        } catch (error) {
            console.log('auth/createUserWithEmailAndPassword', error)
            return null
        }
    }
)

// Action to sign out
export const signOutUser = createAsyncThunk('auth/signOutUser', async () => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        return false
    }
})

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
        }),
            builder.addCase(signInWithGoogle.pending, (state, action) => {
                return {
                    ...state,
                    loading: true,
                }
            }),
            builder.addCase(
                signInWithGoogle.fulfilled,
                (state, action: PayloadAction<User | null>) => {
                    return {
                        loading: false,
                        user: action.payload,
                    }
                }
            ),
            builder.addCase(signInWithGoogle.rejected, (state, action) => {
                return {
                    loading: false,
                    user: null,
                }
            }),
            builder.addCase(signInWithPassword.pending, (state, action) => {
                return {
                    ...state,
                    loading: true,
                }
            }),
            builder.addCase(
                signInWithPassword.fulfilled,
                (state, action: PayloadAction<User | null>) => {
                    return {
                        loading: false,
                        user: action.payload,
                    }
                }
            ),
            builder.addCase(signInWithPassword.rejected, (state, action) => {
                return {
                    loading: false,
                    user: null,
                }
            }),
            builder.addCase(signOutUser.pending, (state, action) => {
                return {
                    ...state,
                    loading: false,
                }
            }),
            builder.addCase(signOutUser.fulfilled, (state, action) => {
                return {
                    user: null,
                    loading: false,
                }
            }),
            builder.addCase(signOutUser.rejected, (state, action) => {
                return {
                    user: null,
                    loading: false,
                }
            })
    },
})

export const { setLoading, setUser } = authSlice.actions

export const selectAuthState = (state: AppState) => state.auth

export default authSlice.reducer

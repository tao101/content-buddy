import useProtectedRoute from '@/hooks/useProtectedRoute'
import { AppState, appDispatch, appSelector } from '@/store'
import { signOutUser } from '@/store/features/auth'
import { useSelector } from 'react-redux'

export default function Welcome() {
    useProtectedRoute()
    const auth = useSelector((state: AppState) => state.auth)
    const dispatch = appDispatch()

    const onLogout = () => {
        dispatch(signOutUser())
    }

    return (
        <div>
            {' '}
            Welcome!
            <div>{JSON.stringify(auth.user, null, 2)}</div>
            <div>
                <button onClick={onLogout}>logout</button>
            </div>
        </div>
    )
}

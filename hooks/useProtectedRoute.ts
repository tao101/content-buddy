import { AppState } from '@/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function useProtectedRoute() {
    const router = useRouter()
    const { user, loading } = useSelector((state: AppState) => state.auth)

    useEffect(() => {
        if (!loading && !user) {
            router.push('/signup')
        }
    }, [user, loading])
}
///

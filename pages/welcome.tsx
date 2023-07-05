import useProtectedRoute from '@/hooks/useProtectedRoute'

export default function Welcome() {
    useProtectedRoute()

    return <div> Welcome!</div>
}

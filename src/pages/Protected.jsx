import { useEffect, useState } from 'react'
import axios from '../api/axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Protected() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/validate')
            .then(res => setUser(res.data.user))
            .catch(() => navigate('/'))
    }, [navigate])


    if (!user) return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <p className="text-xl ml-4">Cargando...</p>
        </div>
    )

    return (
        <div className='h-screen flex items-center justify-center bg-emerald-200'>
            <div className='flex flex-col items-center justify-center space-y-5'>
                <h1 className='text-9xl'>🔓</h1>
                <h2 className="text-2xl font-bold">Esta es una pagina protegida {user.email}</h2>
                <div className='space-x-2'>
                    <Link className="mt-4 bg-red-500 text-white p-2 rounded" to="/logout" >
                        Logout
                    </Link>
                    <Link className="mt-4 bg-blue-500 text-white p-2 rounded" to="/">
                        Ir a Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

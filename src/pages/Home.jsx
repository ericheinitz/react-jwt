import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


export default function Home() {
    const { user, loading } = useAuth()
    if (user) {
        return (
            <div className='h-screen flex items-center justify-center bg-emerald-200'>
                <div className='flex flex-col items-center justify-center space-y-5'>
                    <h1 className="text-3xl font-bold">Pagina de Inicio protegida</h1>
                    <div className='space-x-2'>
                        <Link className="mt-4 bg-red-500 text-white p-2 rounded" to="/logout" >
                            Logout
                        </Link>

                        <Link to="/Protected" className="bg-green-500 text-white px-4 py-2 rounded">Ir Pagina Protegida</Link>
                    </div>
                </div>
            </div>
        )
    }
    if (!user) {
        return (
            <div className='h-screen flex items-center justify-center bg-gray-100'>
                <div className='text-center'>
                    <h2 className="text-2xl font-bold">Bienvenido a la Pagina de Inicio</h2>
                    <div className="flex justify-center mt-10">
                        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Iniciar Sesión</Link>
                        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Registrarse</Link>
                    </div>
                </div>
            </div>
        )
    }
}

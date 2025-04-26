import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import AuthenticatedLayout from '../layouts/AuthenticatedLayout'

export default function Protected() {
    const { user, loading } = useAuth()

    return (
        <AuthenticatedLayout user={user}>
            <div className='py-12'>
                <article className='max-w-7xl mx-auto bg-white text-slate-700 p-6 rounded shadow-md'>
                    <h2 className='text-2xl font-bold text-center'>Pagina protegida</h2>
                    <p className='mt-4 text-center'>Bienvenido  <strong>{user?.email}</strong></p>
                </article>
            </div>
        </AuthenticatedLayout>
    )
}

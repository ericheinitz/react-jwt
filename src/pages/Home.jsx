import React from 'react';
import { Link } from 'react-router-dom';
import ApplicationLogo from '../components/ApplicationLogo';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import useAuth from '../hooks/useAuth';
import reactLogo from '../assets/react.svg'
import goLogo from '../assets/go.svg'
import postgresLogo from '../assets/postgresql.svg'

export default function Home() {
    const { user, loading } = useAuth();

    return (
        <AuthenticatedLayout user={user}>

            <article className="lg:mt-10 bg-white border-b border-slate-200 shadow-md">
                <div
                    className='max-w-7xl mx-auto grid lg:grid-cols-2'
                >
                    <div className="flex flex-col items-center justify-center">

                        <p className="mt-4 text-lg lg:text-2xl text-center text-slate-700 p-2">
                            Esta aplicación combina un <strong>frontend en React</strong> con un <strong>backend en Go</strong>, implementando autenticación mediante <strong>JWT</strong>
                            (usando cookies HTTP only) y <strong>PostgreSQL</strong>.
                        </p>

                        <div className="space-y-4 my-6 lg:mt-12">
                            <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-x-6">
                                <a
                                    href="https://github.com/ericheinitz/go-jwt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                                >
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                    </svg>
                                    Repositorio Backend (Go)
                                </a>
                                <a
                                    href="https://github.com/ericheinitz/react-jwt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                                >
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                    </svg>
                                    Repositorio Frontend (React)
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="hidden lg:flex flex-col items-center justify-center w-full h-full">
                        <ApplicationLogo className="stroke-amber-400 w-2/4 h-2/4 drop-shadow-md drop-shadow-amber-400" />
                        <h1 className="text-slate-600 text-6xl font-bold text-shadow-lg/30">Middle-Code</h1>
                    </div>
                </div>
            </article>
            <div className="lg:py-10">
                <article className="max-w-7xl mx-auto bg-white px-2 pb-8 lg:px-8 rounded shadow-md">
                    <div className='flex items-center justify-center space-x-2'>
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="h-16" alt="React logo" />
                        </a>
                        <a href="https://golang.org" target="_blank">
                            <img src={goLogo} className="h-32" alt="Go logo" />
                        </a>
                        <a href="https://www.postgresql.org" target="_blank">
                            <img src={postgresLogo} className="h-16" alt="PostgreSQL logo" />
                        </a>
                    </div>

                    <div className="text-center bg-slate-200 p-4 rounded shadow-md">
                        <div className="text-left text-slate-800 space-y-4">
                            <h3 className="text-lg font-bold">Frontend (React):</h3>
                            <ul className="list-disc list-inside">
                                <li>Uso de <strong>React Router</strong> para manejar rutas protegidas y públicas.</li>
                                <li>Formularios de inicio de sesión y registro para autenticación del usuario.</li>
                                <li>Navbar dinámico que cambia dependiendo del estado de autenticación del usuario.</li>
                                <li>Integración con el backend mediante peticiones HTTP para validar usuarios y manejar sesiones.</li>
                            </ul>
                            <h3 className="text-lg font-bold">Backend (Go):</h3>
                            <ul className="list-disc list-inside">
                                <li>Autenticación segura con <strong>JWT</strong> y cookies HTTP only.</li>
                                <li>Conexión a una base de datos <strong>PostgreSQL</strong> para almacenar datos de usuarios.</li>
                                <li>Endpoints RESTful para registro, inicio de sesión, validación de usuarios y cierre de sesión.</li>
                                <li>Middleware para proteger rutas y validar tokens.</li>
                                <li>Configuración de <strong>CORS</strong> para permitir la interacción con el frontend.</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </AuthenticatedLayout>
    );
}
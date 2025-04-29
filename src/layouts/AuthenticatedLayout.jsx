import React, { useEffect, useState } from 'react';
import ApplicationLogo from '../components/ApplicationLogo';
import { Link } from 'react-router-dom';
import Logout from '../pages/Logout';
import axiosInstance from '../api/axios';

export default function AuthenticatedLayout({ user, loading, children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [backendDisconnected, setBackendDisconnected] = useState(false);

    useEffect(() => {
        const checkBackend = async () => {
            try {
                await axiosInstance.get('/healthcheck');
                setBackendDisconnected(false);
            } catch (error) {
                setBackendDisconnected(true);
            }
        };

        checkBackend();
        return () => { };
    }, []);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    if (loading) {
        return null;
    }

    return (
        <div className="min-h-screen bg-slate-300/75 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
            <nav className="bg-slate-50 border-b border-slate-200 shadow-md">
                <div className="flex justify-between py-2 px-4">
                    <div className="flex space-x-8">
                        <Link to="/" className="flex items-center text-slate-700 hover:text-slate-900">
                            <ApplicationLogo className="stroke-amber-400 h-8 w-8 mr-2" />
                            <span className="font-bold">Middle-Code</span>
                        </Link>

                        {user && (
                            <div className="hidden md:flex items-center space-x-2">
                                <Link to="/Protected" className="text-slate-700 hover:text-slate-900">Protected</Link>
                            </div>
                        )}
                    </div>
                    {backendDisconnected && (
                        <div
                            className="bg-red-500 text-white text-sm font-bold px-4 flex justify-center items-center rounded-md animate-pulse"
                        >⚠️ Backend desconectado</div>
                    )}
                    <div className="hidden md:flex items-center space-x-2">
                        {user ? (
                            <>
                                <Logout />
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-sm font-bold hover:bg-slate-50 border border-slate-300 hover:border-slate-500 text-slate-700 hover:text-slate-900 rounded-md px-2 py-1 transition duration-100 cursor-pointer"
                                >Iniciar Sesión</Link>
                                <Link to="/register"
                                    className="text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-500 hover:border-emerald-600 rounded-md px-2 py-1 transition duration-100 cursor-pointer"
                                >Registrarse</Link>
                            </>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            className="mobile-menu-button"
                            onClick={toggleMenu}
                        >
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`mobile-menu ${menuOpen ? '' : 'hidden'} md:hidden`}>
                    <div className="flex flex-col items-center space-y-2 py-2 bg-slate-100">
                        {user ? (
                            <>
                                <Link
                                    to="/Protected"
                                    className="text-slate-700 w-full text-center uppercase font-bold hover:text-slate-900"
                                >Protected</Link>
                                <Logout />
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="">Iniciar Sesión</Link>
                                <Link to="/register" className="px-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Registrarse</Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <main>

                {children}
            </main>
        </div>
    );
}
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ApplicationLogo from '../components/ApplicationLogo'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login({ email, password })
      navigate('/')
    } catch (error) {
      setError('Error al iniciar sesión. Inténtalo de nuevo.')
      console.error('Error al iniciar sesión:', error.response?.data?.error || error.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-300/75 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
      <Link to="/" className="flex items-center justify-center mb-6">
        <ApplicationLogo className="stroke-amber-400 h-12 w-12" />
        <span className="text-3xl font-bold text-slate-700 ml-4">Middle-Code</span>
      </Link>
      <Link to="/" className="absolute top-4 left-4 text-blue-500">Volver</Link>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80 text-center">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          className="border border-slate-500 p-2 w-full mb-4 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-slate-500 p-2 w-full mb-4 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button type='submit' className="bg-blue-500 text-white p-2 w-full rounded">Login</button>
        <p className="text-sm mt-4">¿No tienes una cuenta? <Link to="/register" className="text-blue-500">Regístrate aquí</Link></p>
      </form>
    </div>
  )
}
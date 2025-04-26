import { useState } from 'react'
import axios from '../api/axios'
import { Link, useNavigate } from 'react-router-dom'
import ApplicationLogo from '../components/ApplicationLogo'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post('/signup', { email, password })
      navigate('/login')
    } catch (err) {
      setError('Registration failed')
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
      <Link to="/" className="flex items-center justify-center mb-6">
        <ApplicationLogo className="stroke-amber-400 h-12 w-12" />
        <span className="text-3xl font-bold text-slate-700 ml-4">Middle-Code</span>
      </Link>
      <Link to="/" className="absolute top-4 left-4 text-blue-500">Volver</Link>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80 text-center">
        <h2 className="text-2xl mb-4">Register</h2>
        <input
          className="border border-slate-500 p-2 w-full mb-4 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="border border-slate-500 p-2 w-full mb-4 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button className="bg-blue-500 text-white p-2 w-full rounded">Register</button>
        <p className="text-sm mt-4">¿Ya tienes una cuenta? <Link to="/login" className="text-blue-500">Inicia sesión aquí</Link></p>
      </form>
    </div>
  )
}

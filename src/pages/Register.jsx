import { useState } from 'react'
import axios from '../api/axios'
import { Link, useNavigate } from 'react-router-dom'

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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Link to="/" className="absolute top-4 left-4 text-blue-500">Volver</Link>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80 text-center">
        <h2 className="text-2xl mb-4">Register</h2>
        <input
          className="border p-2 w-full mb-4"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
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

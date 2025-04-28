import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  return (
    <button
      className="text-sm font-bold text-white bg-red-600 hover:bg-red-500 border border-red-500 hover:border-red-600 rounded-md px-2 py-1 transition duration-100 cursor-pointer"
      onClick={handleLogout}>Cerrar Sesión</button>
  )
}
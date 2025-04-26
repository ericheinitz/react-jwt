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
      className="bg-red-500 hover:bg-red-700 text-white cursor-pointer transition-colors px-2 rounded"
      onClick={handleLogout}>Cerrar Sesión</button>
  )
}
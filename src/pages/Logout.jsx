import { useEffect } from 'react'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/logout', { withCredentials: true })
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        navigate('/')
      })
  }, [navigate])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <p>Logging out...</p>
    </div>
  )
}

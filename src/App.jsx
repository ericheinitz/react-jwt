import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Protected from './pages/Protected'
import Logout from './pages/Logout'
import Home from './pages/Home'
import { useAuth } from './context/AuthContext'

export default function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return null
  }

  return (
    <Router>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/protected" element={<Protected />} />
            <Route path="/logout" element={<Logout />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}
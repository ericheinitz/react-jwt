import { createContext, useContext, useState, useEffect } from 'react'
import axios from '../api/axios'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/validate')
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [])

  const login = async (credentials) => {
    return axios.post('/login', credentials)
      .then(async (res) => {
        try {
          const validateRes = await axios.get('/validate')
          setUser(validateRes.data.user)
        } catch {
          setUser(null)
        }
        return res.data.user
      })
  }

  const logout = async () => {
    setLoading(true);
    return axios.get('/logout')
      .then(async () => {
        try {
          await axios.get('/validate');
        } catch (error) {
          setUser(null);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
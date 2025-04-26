import { useEffect, useState } from 'react'
import axios from '../api/axios'

export default function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    axios.get('/validate')
      .then(res => {
        if (isMounted) {
          setUser(res.data.user)
        }
      })
      .catch(() => {
        if (isMounted) {
          setUser(null)
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { user, loading }
}
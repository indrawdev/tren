import { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import app from '@/firebase-config'

const auth = getAuth(app)
export const AuthContext = createContext({})
export const useAuthContext = () => useContext(AuthContext)

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<string>()
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser('');
  //     }
  //     setLoading(false)
  //   });

  //   return () => unsubscribe()
  // }, [])


}


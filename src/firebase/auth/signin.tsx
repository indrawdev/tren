import { app } from '@/firebase-config'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

const auth = getAuth(app)

export default async function signIn(email:string, password:string) {
  let result = null
  result = await signInWithEmailAndPassword(auth, email, password)
  return { result }
}
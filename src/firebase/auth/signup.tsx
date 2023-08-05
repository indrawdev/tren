import app from '@/firebase-config'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const auth = getAuth(app)

export default async function signUp(email:string, password:string) {
  let result = null
  result = await createUserWithEmailAndPassword(auth, email, password)
  return { result }
}
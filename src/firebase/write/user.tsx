import app from '@/firebase-config'
import { getDatabase } from "firebase/database"
import { ref, set } from 'firebase/database'


const database = getDatabase(app)

export default async function writeUserData(email:string) {
  const db = database
  let result = null
  result = await set(ref(db, `users/` + email), {
    email: email,
    name: 'Indra Pramana'
  })

  return {result}
}
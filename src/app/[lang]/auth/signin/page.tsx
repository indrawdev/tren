'use client'

import signIn from "@/firebase/auth/signin"
import { Locale } from '@/i18n-config'
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function SignIn({
  params: { lang },
}: {
  params: { lang: Locale }
}) {

  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleForm = async (event:any) => {
    event.preventDefault()

    const { result } = await signIn(email, password);

    if (!result) {
      return console.log(result)
    }

    // else successful
    console.log(result)
    return router.push(`/${lang}/admin`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleForm} className="form">
        <label htmlFor="email">
            <p>Email</p>
            <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
        </label>
        <label htmlFor="password">
            <p>Password</p>
            <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
  </main>
  )
}

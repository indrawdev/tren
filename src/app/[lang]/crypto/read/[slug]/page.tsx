'use client'
import { Locale } from '@/i18n-config'

export default function DetailCrypto({
  params: { lang, slug },
}: {
  params: { lang: Locale, slug: string }
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  )
}


export async function generateMetadata({ params }: { params: any }) {
  return {
    title: '...',
    description: '...',
  }
}
'use client'

import { Locale } from '@/i18n-config'

export default function BeautyPage({
  params: { lang },
}: {
  params: { lang: Locale }
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
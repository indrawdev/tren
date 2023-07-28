'use client'

import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Counter from '@/app/[lang]/components/counter'
import LocaleSwitcher from '@/app/[lang]/components/locale-switcher'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
  }) {

  const dictionary = await getDictionary(lang)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <LocaleSwitcher />
        <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server:{' '}
          {dictionary['server-component'].welcome}
        </p>
        <Counter dictionary={dictionary.counter} />
      </div>
    </main>
  )
}

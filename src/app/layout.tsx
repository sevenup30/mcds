import './globals.css'
import { Inter } from 'next/font/google'
import { i18n } from '../../i18n-config'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Martial CARRIERE Development Solutions',
  description: 'Bienvenue sur mon site',
}
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

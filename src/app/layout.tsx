import './globals.css'
import { ReactQueryProvider } from './react-query-provider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + '  text-gray-800'} >
        <ReactQueryProvider>
          {children}
          </ReactQueryProvider>
      </body>
    </html>
  )
}
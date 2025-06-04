import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header>
        <h1>CRM Toilettage Canin</h1>
        <nav>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/customers">Clients</Link></li>
            <li><Link href="/dogs">Chiens</Link></li>
            <li><Link href="/appointments">Rendez-vous</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

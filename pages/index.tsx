import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Bienvenue sur le CRM de toilettage canin</h1>
      <nav>
        <ul>
          <li><Link href="/customers">Clients</Link></li>
          <li><Link href="/dogs">Chiens</Link></li>
          <li><Link href="/appointments">Rendez-vous</Link></li>
        </ul>
      </nav>
    </main>
  )
}

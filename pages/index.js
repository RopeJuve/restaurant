import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyRestauran</title>
        <meta name="description" content="Restauran" />
      </Head>
      <NavBar />
    </div>
  )
}

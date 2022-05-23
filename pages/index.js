import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyRestauran</title>
        <meta name="description" content="Restauran" />
      </Head>
      <h1>Restauran</h1>
    </div>
  )
}

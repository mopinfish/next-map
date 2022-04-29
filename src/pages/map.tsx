import Head from 'next/head'
//import Image from 'next/image'
import MapPane from '../components/MapPane'

const styles = {
  container: {
    padding: '0 2rem',
  },
  main: {
    minHeight: '100vh',
    padding: '4rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
}

export default function Map() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="map page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <MapPane />
      </main>
    </div>
  )
}

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
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
        <MapPane />
      </main>
    </div>
  )
}

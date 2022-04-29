import { VStack, Heading } from '@chakra-ui/react'
import Head from 'next/head'
//import Image from 'next/image'
import MapPane from '../components/MapPane'

const styles = {
  container: {
    padding: '0 2rem',
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

      <VStack width="full">
        <Heading as="h3" size="lg">
          Next Map Page
        </Heading>
      </VStack>
      <MapPane />
    </div>
  )
}

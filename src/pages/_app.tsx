import '../styles/globals.css'

import 'focus-visible/dist/focus-visible'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../config/chakra'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

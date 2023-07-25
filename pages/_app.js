import ToTop from '@/features/common/modules/ToTop/ToTop'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset/>
       <Component {...pageProps} />
       <ToTop/>
    </ChakraProvider>
  )
}

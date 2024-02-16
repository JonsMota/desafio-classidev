// App.js
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import AdContexts from '@/components/classified/adContext/AdContext'
import theme from '../styles/theme'

function App({ Component, pageProps }) {
  const [ads, setAds] = useState([])

  return (
    <ThemeProvider theme={theme}>
      <AdContexts.Provider value={{ ads, setAds }}>
        <Component {...pageProps} />
      </AdContexts.Provider>
    </ThemeProvider>
  )
}

export default App

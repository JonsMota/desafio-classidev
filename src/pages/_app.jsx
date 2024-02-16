import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

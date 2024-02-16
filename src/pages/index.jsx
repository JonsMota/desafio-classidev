import styled from 'styled-components'
import Link from 'next/link'

import Navbar from '@/components/landingPage/navbar/Navbar'
import { Button } from '@/components/landingPage/button/Button'
import Footer from '@/components/landingPage/footer/Footer'

const StyledPage = styled.div`
  background: ${(props) => props.theme.primary};
  height: 100vh;
`

export default function Home() {
  return (
    <StyledPage>
      <Navbar />
      <Link href="/classified">
        <Button>Criar anúncio</Button>
      </Link>
      <Footer />
    </StyledPage>
  )
}

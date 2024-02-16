import styled from 'styled-components'

import Navbar from '@/components/landingPage/navbar/Navbar'
import { Button } from '@/components/landingPage/button/Button'

const StyledPage = styled.div`
  background: ${(props) => props.theme.primary};
  height: 100vh;
`

export default function Home() {
  return (
    <StyledPage>
      <Navbar />
      <Button>Criar anúncio</Button>
    </StyledPage>
  )
}

import styled from 'styled-components'

import Navbar from '@/components/landingPage/navbar/Navbar'
import Footer from '@/components/landingPage/footer/Footer'

const StyledPage = styled.div`
  background: ${(props) => props.theme.black};
  height: 100vh;
`

export default function Classified() {
  return (
    <StyledPage>
      <Navbar />
      <Footer />
    </StyledPage>
  )
}

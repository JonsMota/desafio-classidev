import styled from 'styled-components'

import Navbar from '@/components/landingPage/navbar/Navbar'

const StyledPage = styled.div`
  background: ${(props) => props.theme.primary};
  height: 100vh;
`

export default function Home() {
  return (
    <StyledPage>
      <Navbar />
    </StyledPage>
  )
}

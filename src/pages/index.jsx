import styled from 'styled-components'
import Link from 'next/link'

import Navbar from '@/components/landingPage/navbar/Navbar'
import { Button } from '@/components/landingPage/button/Button'
import Footer from '@/components/landingPage/footer/Footer'
import AdCard from '@/components/classified/input/adCard/AdCard'

const StyledPage = styled.div`
  background: ${(props) => props.theme.primary};
  height: 100vh;
`

export default function Home({ ads = [] }) {
  console.log(ads)
  return (
    <StyledPage>
      <Navbar />
      <Link href="/classified">
        <Button>Criar anúncio</Button>
      </Link>
      {ads && ads.map((ad, index) => <AdCard key={index} ad={ad} />)}
      <Footer />
    </StyledPage>
  )
}

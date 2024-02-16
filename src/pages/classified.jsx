import styled from 'styled-components'

import Navbar from '@/components/landingPage/navbar/Navbar'
import Footer from '@/components/landingPage/footer/Footer'
import { Input, InputSelect } from '@/components/classified/input/Input'
import TextArea from '@/components/classified/input/TextArea'
import { FormButton } from '@/components/landingPage/button/Button'

const StyledPage = styled.div`
  background: ${(props) => props.theme.black};
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 35%;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 48px;
  margin: auto;
  padding: 100px 10px 10px 10px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 500px;
  padding: 50px;
  margin: auto;
  margin-top: 20px;
  gap: 5px;
`

export default function Classified() {
  const categories = [
    { value: 'a', label: 'Automóveis' },
    { value: 'b', label: 'Informática' },
    { value: 'c', label: 'Roupas & Acessórios' },
    { value: 'd', label: '== Nenhuma das Opções ==' }
  ]

  return (
    <StyledPage>
      <Navbar />
      <Title>Crie seu anúncio</Title>
      <Form>
        <Input placeholder="Nome do produto" />
        <InputSelect options={categories} placeholder="Selecione a categoria" />
        <Input placeholder="Preço" />
        <Input placeholder="Whatsapp" />
        <TextArea placeholder="Descrição" />
        <FormButton>Criar anúncio</FormButton>
      </Form>
      <Footer />
    </StyledPage>
  )
}

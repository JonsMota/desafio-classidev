import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { useContext, useEffect } from 'react'

import Navbar from '@/components/landingPage/navbar/Navbar'
import Footer from '@/components/landingPage/footer/Footer'
import { Input, InputSelect } from '@/components/classified/input/Input'
import TextArea from '@/components/classified/input/TextArea'
import { FormButton } from '@/components/landingPage/button/Button'
import AdContext from '@/components/classified/adContext/AdContext'

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
  const { control, handleSubmit } = useForm()
  const adContext = useContext(AdContext)
  const { ads, setAds } = adContext

  const onSubmit = (data) => {
    console.log(data)
    setAds([...ads, data])
  }

  useEffect(() => {
    console.log(ads)
  }, [ads])
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="nomeProduto"
          control={control}
          defaultValue=""
          render={({ field }) => <Input type="text" {...field} placeholder="Nome do produto" />}
        />
        <Controller
          name="categoria"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <InputSelect options={categories} {...field} placeholder="Selecione a categoria" />
          )}
        />
        <Controller
          name="preco"
          control={control}
          defaultValue=""
          render={({ field }) => <Input type="number" {...field} placeholder="Preço" />}
        />
        <Controller
          name="whatsapp"
          control={control}
          defaultValue=""
          render={({ field }) => <Input type="number" {...field} placeholder="Whatsapp" />}
        />
        <Controller
          name="descricao"
          control={control}
          defaultValue=""
          render={({ field }) => <TextArea type="text" {...field} placeholder="Descrição" />}
        />
        <FormButton type="submit">Criar anúncio</FormButton>
      </Form>
      <Footer />
    </StyledPage>
  )
}

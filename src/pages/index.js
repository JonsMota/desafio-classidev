import styled from 'styled-components'

const Title = styled.h1`
  color: ${(props) => props.theme.primary};
`

export default function Home() {
  return <Title>Hello World</Title>
}

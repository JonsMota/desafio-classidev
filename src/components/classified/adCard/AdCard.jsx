import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 334px;
  height: 313px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`

const StyledTitle = styled.h2`
  margin: 0;
  padding: 0;
`

const StyledCategory = styled.p`
  margin: 0;
  padding: 0;
`

const StyledPrice = styled.p`
  margin: 0;
  padding: 0;
`

const StyledDescription = styled.p`
  margin: 0;
  padding: 0;
`

export default function AdCard({ ad }) {
  console.log(ad)
  return (
    <StyledContainer>
      <StyledTitle>{ad.nomeProduto}</StyledTitle>
      <StyledCategory>{ad.categoria}</StyledCategory>
      <StyledPrice>{ad.preco}</StyledPrice>
      <StyledDescription>{ad.descricao}</StyledDescription>
    </StyledContainer>
  )
}

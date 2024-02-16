import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 85px;
  margin-top: 572px;
`

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  margin-top: 16px;
`
const StyledText = styled.h3`
  color: ${(props) => props.theme.white};
  font-weight: 300;
  font-style: italic;
  font-size: 20px;
`

function Footer() {
  return (
    <StyledFooter>
      <StyledContent>
        <StyledText>Criado por Jonas Mota - Desafio SejaDev</StyledText>
      </StyledContent>
    </StyledFooter>
  )
}

export default Footer

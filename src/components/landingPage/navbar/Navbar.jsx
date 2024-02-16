import styled from 'styled-components'

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.secondary};
  width: 100%;
  height: 116px;
  display: flex;
  align-items: center;
`

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15%;
  height: 100%;
  margin-left: 40px;
  cursor: pointer;
`

const Title = styled.h2`
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 36px;
`

const StyledDefinition = styled.h3`
  color: ${(props) => props.theme.definition};
  font-weight: 100;
  font-style: italic;
  font-size: 20px;
  margin-top: -30px;
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledLogo>
        <Title>ClassifiDev</Title>
        <StyledDefinition>O seu classificado online</StyledDefinition>
      </StyledLogo>
    </StyledNavbar>
  )
}

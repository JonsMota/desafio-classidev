import styled from 'styled-components'

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.input};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 33px;
  border: none;
  border-radius: 10px;
  padding: 8px;
  font-size: 20px;
  margin-top: 15px;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.textInput};
    font-weight: 400;
    padding: 20px;
  }
`

const Input = ({ ...props }) => {
  return <StyledInput {...props} />
}

export default Input

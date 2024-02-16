import styled from 'styled-components'

const StyledTextarea = styled.textarea`
  background-color: ${(props) => props.theme.input};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 8px 20px;
  width: 100%;
  height: 130px;
  resize: none;
  border: none;
  padding: 8px;
  font-size: 20px;
  margin-top: 15px;

  &::placeholder {
    color: ${(props) => props.theme.textInput};
    font-weight: 400;
    padding: 20px;
  }
`

function Textarea({ ...props }) {
  return <StyledTextarea {...props} />
}

export default Textarea

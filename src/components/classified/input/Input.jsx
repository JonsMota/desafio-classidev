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

  &::placeholder {
    color: ${(props) => props.theme.textInput};
    font-weight: 400;
    padding: 20px;
  }
`

const Input = ({ ...props }) => {
  return <StyledInput {...props} />
}

const StyledSelect = styled.select`
  background-color: ${(props) => props.theme.input};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 103%;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 15px;
  padding-top: 10px;
  padding-left: 20px;
  outline: none;
`

const InputSelect = ({ options = [], ...props }) => {
  return (
    <StyledSelect {...props}>
      <option value="" disabled>
        {props.placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  )
}

export { Input, InputSelect }

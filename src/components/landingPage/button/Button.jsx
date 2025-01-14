import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${(props) => props.theme.button};
  width: 261px;
  height: 56px;
  margin-right: 100px;
  color: ${(props) => props.theme.white};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 40px;
  left: 1116px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
`
export const FormButton = styled.button`
  background-color: ${(props) => props.theme.button};
  width: 36%;
  height: 56px;
  color: ${(props) => props.theme.white};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  position: absolute;
  margin-top: 450px;
  font-weight: 700;
  font-size: 20px;
`

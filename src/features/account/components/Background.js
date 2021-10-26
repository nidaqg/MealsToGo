import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;


export const AccountContainer = styled.View`
position: absolute;
padding: ${(props)=> props.theme.space[4]};
margin-top: ${(props)=> props.theme.space[2]};
background-color: rgba(255, 255, 255, 0.7)
`
export const LoginContainer = styled.View`
position: absolute;
padding: ${(props)=> props.theme.space[4]};
margin-top: ${(props)=> props.theme.space[2]};
background-color: rgba(255, 255, 255, 0.7)
`

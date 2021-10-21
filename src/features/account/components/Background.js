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
background-color: #ddd;
`
export const LoginContainer = styled.View`
position: absolute;
padding-vertical: ${(props)=> props.theme.space[4]};
padding-horizontal: ${(props)=> props.theme.space[5]};
margin-top: ${(props)=> props.theme.space[2]};
background-color: #ddd;
`

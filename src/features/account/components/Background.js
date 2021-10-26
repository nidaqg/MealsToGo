import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const MainContainer = styled.View`
position: absolute;
padding: ${(props)=> props.theme.space[4]};
margin-top: ${(props)=> props.theme.space[2]};
`

export const Title = styled.Text`
fontFamily: ${props => props.theme.fonts.heading}
fontSize: ${props => props.theme.fontSizes.h4};
fontWeight: ${props => props.theme.fontWeights.bold};
color: ${props => props.theme.colors.ui.primary};
`
export const AccountContainer = styled.View`
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
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const AnimationWrapper = styled.View`
width: 100%;
height: 40%;
position: absolute;
top: 30px;
padding:${(props)=> props.theme.space[2]}
`;

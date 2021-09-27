import styled from "styled-components/native";
import {Card} from "react-native-paper";

//styled components for info card
export const Title = styled.Text`
fontFamily: ${props => props.theme.fonts.heading}
fontSize: ${props => props.theme.fontSizes.body};
color: ${props => props.theme.colors.ui.primary};
`;
export const Info = styled.View`
padding: ${props => props.theme.space[3]}
`;
export const Rating = styled.View`
flexDirection: row;
paddingTop: ${props => props.theme.space[2]};
paddingBottom: ${props => props.theme.space[2]};
`;
export const Section = styled.View`
flexDirection: row;
alignItems: center;
`
export const SectionEnd =styled.View`
flexDirection: row;
flex: 1;
justifyContent: flex-end;
`;

export const RestaurantCard = styled(Card)`
  backgroundColor: ${props => props.theme.colors.bg.primary};
  marginBottom: ${props => props.theme.space[3]}
`;
export const CardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  backgroundColor: ${props => props.theme.colors.bg.primary};
`;
export const Address = styled.Text`
fontFamily: ${props => props.theme.fonts.body}
fontSize: ${props => props.theme.fontSizes.caption};
color: ${props => props.theme.colors.ui.primary};
`

export const Icon = styled.Image`
width: ${props => props.theme.sizes[1]};
height: ${props => props.theme.sizes[1]};
`;

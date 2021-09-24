import React from "react";
import styled from "styled-components/native";
import { Button, Card, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";


//styled components
const Title = styled.Text`
fontFamily: ${props => props.theme.fonts.heading}
fontSize: ${props => props.theme.fontSizes.body};
color: ${props => props.theme.colors.ui.primary};
`;
const Info = styled.View`
padding: ${props => props.theme.space[3]}
`;
const Rating = styled.View`
flexDirection: row;
paddingTop: ${props => props.theme.space[2]};
paddingBottom: ${props => props.theme.space[2]};
`;
const Section = styled.View`
flexDirection: row;
alignItems: center;
`
const SectionEnd =styled.View`
flexDirection: row;
flex: 1;
justifyContent: flex-end;
`;

const RestaurantCard = styled(Card)`
  backgroundColor: ${props => props.theme.colors.bg.primary};
`;
const CardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  backgroundColor: ${props => props.theme.colors.bg.primary};
`;
const Address = styled.Text`
fontFamily: ${props => props.theme.fonts.body}
fontSize: ${props => props.theme.fontSizes.caption};
color: ${props => props.theme.colors.ui.primary};
`

export const RestaurantInfo = ({ restaurant = {} }) => {
    //deconstruct the restaurant object
    //(will get this info from the google API)
    const {
        name = "Some restaurant",
        icon,
        photos = [
            "https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0",
        ],
        address = "100 street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false,
    } = restaurant;

    //this will create an array with number of elements equal to the rating number
    //Math.floor to account for decimal places
    const ratingArray = Array.from(new Array(Math.floor(rating)))

    return (
        <>
            <RestaurantCard elevation={5}>

                <CardCover source={photos} />
                <Info>
                    <Title>{name}</Title>
                    <Section>
                    <Rating>
                        {ratingArray.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                    {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                    </SectionEnd>
                    </Section>
                    

                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>
        </>
    );
};

import React from "react";
import styled from "styled-components/native";
import { Button, Card, Paragraph } from "react-native-paper";

//styled component npm package
const Title = styled.Text`
  fontSize: ${props => props.theme.sizes[2]};
  padding: ${props => props.theme.space[1]};
  color: ${props => props.theme.colors.ui.primary };
`;
const RestaurantCard = styled(Card)`
  backgroundColor: ${props => props.theme.colors.bg.primary};
`;

const CardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  backgroundColor: ${props => props.theme.colors.bg.primary};
`;

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
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <>
      <RestaurantCard elevation={5}>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}

        <CardCover source={photos} />
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
      </RestaurantCard>
    </>
  );
};

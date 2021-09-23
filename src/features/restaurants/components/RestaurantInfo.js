import React from "react";
import styled from "styled-components/native";
import { Button, Card, Paragraph } from "react-native-paper";

//trying out styled component npm package
const Title = styled.Text`
  fontSize: 24px;
`;
const RestaurantCard = styled(Card)`
  backgroundColor: white;
`;

const CardCover = styled(Card.Cover)`
  padding: 10px;
  backgroundColor: white;
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
          <Paragraph>{address}</Paragraph>
        </Card.Content>
      </RestaurantCard>
    </>
  );
};

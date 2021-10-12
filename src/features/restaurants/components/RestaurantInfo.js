import React from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  Title,
  Info,
  Rating,
  Section,
  SectionEnd,
  Icon,
  RestaurantCard,
  CardCover,
  Address,
} from "./RestaurantInfoStyles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  //deconstruct the restaurant object
  //(will get this info from the google API)
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0",
    ],
    vicinity = "100 street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  //this will create an array with number of elements equal to the rating number
  //Math.floor to account for decimal places
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <CardCover key={name} source={{uri: photos[0]}} />
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text style={{ paddingRight: 16, color: "red" }}>
                  Closed Temporarily
                </Text>
              )}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <View style={{ paddingLeft: 16 }}>
                <Icon
                  style={{ width: 16, height: 16 }}
                  source={{ uri: icon }}
                />
              </View>
            </SectionEnd>
          </Section>

          <Address>{vicinity}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};

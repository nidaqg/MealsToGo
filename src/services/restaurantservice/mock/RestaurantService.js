import { mocks, mockImages } from "./index";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({results=[]}) => {
const mappedResults = results.map((restaurant)=> {
  restaurant.photos = restaurant.photos.map((p)=> {
    return mockImages[Math.floor(Math.random()*(mockImages.length))]
  })
    return {
        ...restaurant,
        isClosedTemporarily:restaurant.business_status === "CLOSED_TEMPORARILY",
        IsOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    }
});
return camelize(mappedResults)
};

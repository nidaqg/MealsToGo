import React, {useContext, useEffect, useState} from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { SearchMap } from "../components/SearchMap";
import { LocationContext } from "../../../services/location/locationContext";
import { RestaurantContext } from "../../../services/restaurantservice/mock/RestaurantContext";
import { MapCallout } from "../components/MapCallout";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  //this will tell map where to focus
  const [latDelta, setLatDelta] = useState(0)

  //get viewport lat and long from mock
  const {lat, lng, viewport} = location;

  useEffect(() => {
    const northeastlat = viewport.northeast.lat;
    const southwestlat = viewport.southwest.lat;

    const latDelta = northeastlat - southwestlat;
    setLatDelta(latDelta);
  }, [location, viewport])

  return (
    <>
      <SearchMap />
      <Map
      region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
      }}
      >
          {
              restaurants.map((restaurant)=> {
                  return (
                      <>
                      <MapView.Marker
                      key = {restaurant.name}
                      title= {restaurant.name}
                      coordinate= {{
                       latitude: restaurant.geometry.location.lat,
                       longitude: restaurant.geometry.location.lng,   
                      }}
                      >

                      <MapView.Callout>
                      <MapCallout restaurant = {restaurant} />
                      </MapView.Callout>

                      </MapView.Marker>
                      </>
                  )
              })
          }
      </Map>
    </>
  );
};

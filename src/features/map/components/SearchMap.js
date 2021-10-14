import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/locationContext";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 20px;
  width: 100%;
`;

export const SearchMap = () => {
  //import location context
  const { keyword, search } = useContext(LocationContext);
  //use state to track the search term, use a default for better aesthetic
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  //use effect tp set keyword everytime it changes
  //this way, when user searches for city on restaurant screen, app will also
  //set search to that city on map screen
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  
  return (
    <>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          value={searchKeyword}
          onChangeText={(text) => {
            setSearchKeyword(text);
          }}
          onSubmitEditing={() => {
            search(searchKeyword);
          }}
        />
      </SearchContainer>
    </>
  );
};

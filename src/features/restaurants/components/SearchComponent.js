import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/locationContext";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  //import location context
  const { keyword, search } = useContext(LocationContext);
  //use state to track the search term, use a default for better aesthetic
  const [searchKeyword, setSearchKeyword] = useState(keyword);

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

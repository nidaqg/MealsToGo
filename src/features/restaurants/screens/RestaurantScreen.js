import React from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/RestaurantInfo';

export const RestaurantScreen = () => {
    return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.search}>
        <Searchbar
      placeholder="Search"
    />
        </View>
        <View style={styles.listView}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    search: {
      padding: 16
    },
    listView: {
      padding: 16,
      flex: 1,
      backgroundColor: "lightgrey",
    },
  });
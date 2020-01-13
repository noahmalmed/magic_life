import React from "react";
import { View, StyleSheet } from "react-native";
import LifeCounter from "./LifeCounter";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.counterContainer, styles.upsideDown]}>
        <LifeCounter />
      </View>
      <View style={{ height: 1, backgroundColor: "white" }} />
      <View style={styles.counterContainer}>
        <LifeCounter />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flex: 1
  },
  upsideDown: {
    transform: [{ rotateX: "180deg" }, { rotateY: "180deg" }]
  }
});

export default Main;

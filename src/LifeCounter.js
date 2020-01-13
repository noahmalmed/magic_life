import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import theme from "./theme";

const Color = {
  FOREST: "FOREST",
  ISLAND: "ISLAND",
  MOUNTAIN: "MOUNTAIN",
  PLAINS: "PLAINS",
  SWAMP: "SWAMP"
};

const backgroundStyleForColor = color => {
  switch (color) {
    case Color.FOREST:
      return { backgroundColor: theme.FOREST_PRIMARY };
    case Color.ISLAND:
      return { backgroundColor: theme.ISLAND_PRIMARY };
    case Color.MOUNTAIN:
      return { backgroundColor: theme.MOUNTAIN_PRIMARY };
    case Color.PLAINS:
      return { backgroundColor: theme.PLAINS_PRIMARY };
    case Color.SWAMP:
      return { backgroundColor: theme.SWAMP_PRIMARY };
  }
};

const textStyleForColor = color => {
  switch (color) {
    case Color.FOREST:
      return { color: theme.FOREST_SECONDARY };
    case Color.ISLAND:
      return { color: theme.ISLAND_SECONDARY };
    case Color.MOUNTAIN:
      return { color: theme.MOUNTAIN_SECONDARY };
    case Color.PLAINS:
      return { color: theme.PLAINS_SECONDARY };
    case Color.SWAMP:
      return { color: theme.SWAMP_SECONDARY };
  }
};

const LifeCounter = () => {
  const [lifeTotal, setLifeTotal] = useState(20);
  const [color, setColor] = useState(Color.SWAMP);

  const decrementLifeTotal = () => {
    setLifeTotal(lifeTotal - 1);
  };

  const incrementLifeTotal = () => {
    setLifeTotal(lifeTotal + 1);
  };

  return (
    <View style={[{ flex: 1 }, backgroundStyleForColor(color)]}>
      <View style={styles.centered}>
        <View style={styles.lifeContainer}>
          <Button onPress={decrementLifeTotal} title="<" />
          <Text style={[styles.totalText, textStyleForColor(color)]}>
            {lifeTotal}
          </Text>
          <Button onPress={incrementLifeTotal} title=">" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lifeContainer: { flexDirection: "row" },
  totalText: { alignSelf: "center", fontSize: 76 },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" }
});

export default LifeCounter;

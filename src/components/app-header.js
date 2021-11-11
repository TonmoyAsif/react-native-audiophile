import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { colors } from "../theme";

export default function AppHeader( { showBottomBorder = true}) {
  return (
    <View style={[styles.container, showBottomBorder && styles.showBottomBorder]}>
      <Image
        style={styles.image}
        resizeMode={"contain"}
        source={require("../../assets/images/audiophile.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 160,
  },
  showBottomBorder: {
    borderBottomWidth: .5,
    borderBottomColor: '#585858'
  }
});

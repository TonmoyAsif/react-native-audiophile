import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "./text/text";
import { colors, spacing } from "../theme";
// import LottieView from 'lottie-react-native';

export default function HomeBanner() {
  return (
    <View style={styles.banner}>
      <Image
        resizeMode={"cover"}
        source={require("../../assets/images/home-banner.png")}
        style={styles.bannerImage}
      />
      <View style={styles.bannerText}>
        <Text white preset="h3" centered uppercase>
          Welcome
        </Text>
        <Text preset="light"
          textColor={colors.darkGrey}
          centered
          style={styles.bannerSubtitle}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        {/* <LottieView style={styles.scrollDownIcon} autoPlay loop 
              source={require('../../assets/images/scroll-down.json')}
            />; */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.black,
  },
  bannerImage: {
    width: "100%",
    alignSelf: "center",
    top: -spacing[5],
  },
  bannerText: {
    position: "absolute",
    width: "100%",
    top: 165,
  },
  bannerSubtitle: {
    marginTop: spacing[5],
    width: 350,
    alignSelf: "center",
  },
  scrollDownIcon: {
    height: 60,
    width: 60,
    alignSelf: "center",
  },
});

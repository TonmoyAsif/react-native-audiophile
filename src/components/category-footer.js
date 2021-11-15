import React from "react";
import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import Text from "./text/text";
import { colors, spacing } from "../theme";

export default function CategoryFooter() {
  const windowWidth = useWindowDimensions().width;
  return (
    <View style={styles.footerSection}>
      <Image
        source={require("../../assets/images/footer.png")}
        resizeMode="contain"
        style={[styles.image, { width: windowWidth - 80}]}
      />
      <Text preset='h5' uppercase>Bringing you the</Text>
      <View style={styles.footerTitle}>
        <Text preset='h5' style={styles.primaryText} uppercase>best </Text>
        <Text preset='h5' uppercase>audio gear</Text>
      </View>
      <Text preset='light' style={styles.footerDetails}>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    footerSection: {
        marginHorizontal: spacing[8],
        alignItems: "center",
    },
    image: {
        height: 300,
        borderRadius: 15,
        marginBottom: spacing[5],
    },
    footerTitle: {
        flexDirection: "row",
        alignItems: "center",
    },
    primaryText: {
        color: colors.primary,
    },
    footerDetails: {
        marginVertical: spacing[4],
        textAlign: "center",
        color: colors.darkGrey
    }
});

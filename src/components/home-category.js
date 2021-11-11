import React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import Text from "../components/text/text";
import { colors, spacing } from "../theme";
import { AntDesign } from "@expo/vector-icons";

export default function HomeCategory({ title, image, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.categoryBox}>
      <Image source={image} style={styles.image} />
      <View style={styles.textView}>
        <Text uppercase preset="h7">
          {title}
        </Text>
        <View style={styles.buttonView}>
          <Text
            preset="subtitle"
            textColor={colors.darkGrey}
            centered
            uppercase
            style={styles.buttonText}
          >
            Shop
          </Text>
          <AntDesign name="right" size={18} color={colors.primary} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  categoryBox: {
    marginVertical: spacing[8],
    marginHorizontal: spacing[7],
    borderRadius: spacing[3],
    backgroundColor: colors.grey,
    alignItems: "center",
    padding: spacing[4],
  },
  image: {
    top: -60
  },
  textView: {
    alignItems: "center",
    justifyContent: "center",
    top: -30,
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    top: 15
  },
  buttonText: {
    marginRight: spacing[3],
  },
});

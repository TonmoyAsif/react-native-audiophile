import React from 'react';
import { StyleSheet, useWindowDimensions, View, Image, Pressable } from 'react-native';
import Text from './text/text';
import { colors, spacing } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function FeaturedProduct({ id, name, category, image }) {
    const windowWidth = useWindowDimensions().width
    const navigation = useNavigation();
    const onPressSeeProduct = () => {
      navigation.navigate("ProductDetails", { id });
    }

    return (
        <View style={styles.featuredBox}>
            <View style={[styles.outerCircle, {width: windowWidth - 75}]}>
                <View style={[styles.innerCircle, {width: windowWidth - 125}]}>
                    <Image source={image.source} resizeMode='contain' style={styles.image} />
                </View>
            </View>
            <View style={styles.description}>
                <Text preset='h4' uppercase white>{name}</Text>
                <Text preset='h6' uppercase white>{category}</Text>
                <Text preset='light' style={styles.details}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Text>
            </View>
            <Pressable onPress={onPressSeeProduct} style={styles.button}>
                <Text uppercase white>See product</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  featuredBox: {
    marginVertical: spacing[5],
    marginHorizontal: spacing[5],
    backgroundColor: colors.primary,
    borderRadius: spacing[3],
    alignItems: "center",
    justifyContent: "center",
  },
  outerCircle: {
    height: 330,
    borderWidth: 1,
    borderColor: '#B9C1C4',
    borderRadius: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    height: 280,
    borderWidth: 1,
    borderColor: '#B9C1C4',
    borderRadius: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 172,
    width: 188
  },
  description: {
      alignItems: "center",
  },
  details: {
    marginVertical: spacing[5],
    color: colors.grey,
    textAlign: "center",
    maxWidth: 250
  },
  button: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[5],
    backgroundColor: colors.black,
    marginTop: spacing[2],
    marginBottom: spacing[8],
    borderRadius: spacing[1],
  }

});

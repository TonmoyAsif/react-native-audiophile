import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import Text from "../components/text/text";
import AppHeader from "../components/app-header";
import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "../../redux/productSlice";
import { colors, spacing } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import CounterButton from "../components/counter-button";

export default function ProductDetails({ navigation, route }) {
  const id = route.params.id;
  const product = useSelector(state => selectProductById(state, id));
  const { name, price, category, description, featuredImage, features, included, images } = product;

  return (
    <SafeAreaView>
      <ScrollView>
        <AppHeader />
        <Pressable style={styles.backButton} onPress={() => { navigation.goBack() }}>
          <Ionicons name="chevron-back-sharp" size={20} color="black" />
          <Text preset='light' style={{color: 'black'}}>Go Back</Text>
        </Pressable>
        <View style={styles.descriptionSection}>
          <View style={styles.imageBox}>
            <Image
              source={featuredImage.source}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.topSection}>
            <Text preset="h4" uppercase>
              {name}
            </Text>
            <Text preset="h6" uppercase>
              {category}
            </Text>
            <Text preset="light" style={styles.description}>
              {description}
            </Text>
            <Text preset="h6" uppercase>
              $ {price}
            </Text>
            <View style={styles.cartSection}>
              <CounterButton/>
              <Pressable style={styles.button}>
                <Text uppercase white>
                  Add to cart
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.featuresSection}>
            <Text preset='h5' uppercase>Features</Text>
            <Text preset='light' style={styles.featuresText}>
              {features}
            </Text>
          </View>
          <View style={styles.inTheBoxSection}>
            <Text preset='h5' uppercase style={styles.inTheBoxTitle}>
              In the box
            </Text>
            { included.map(item =>
              <View key={item.name} style={styles.inTheBoxItems}>
                <Text preset='subtitle' textColor={colors.primary}>{item.amount}x</Text>
                <Text preset='light' style={styles.inTheBoxItemName}>{item.name}</Text>
              </View>
            )}
          </View>
          <View style={styles.imageGallery}>
              {
                images.map((image, index) => {
                  return (
                    <View key={index.toString()} style={styles.imageGalleryItem}>
                      <Image source={image.source} style={styles.imageGalleryImage} />
                    </View>
                  )
                })
              }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[5],
    marginLeft: spacing[5],
  },
  descriptionSection: {
    marginHorizontal: spacing[6],
    marginVertical: spacing[6],
  },
  imageBox: {
    backgroundColor: colors.grey,
    borderRadius: spacing[4],
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[8],
  },
  image: {
    height: 220,
    width: "100%",
  },
  topSection: {
    marginTop: spacing[8],
  },
  description: {
    marginVertical: spacing[5],
    marginRight: spacing[2],
    color: colors.darkGrey
  },
  cartSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing[5],
  },
  button: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[5],
    backgroundColor: colors.primary,
    marginLeft: spacing[5]
  },
  featuresSection: {
    marginTop: spacing[12],
  },
  featuresText: {
    color: colors.darkGrey,
    marginRight: spacing[2],
    marginVertical: spacing[4]
  },
  inTheBoxSection: {
    marginTop: spacing[12],
  },
  inTheBoxTitle: {
    marginBottom: spacing[4],
  },
  inTheBoxItems: {
    flexDirection: "row",
    marginBottom: spacing[2],
  },
  inTheBoxItemName: {
    color: colors.darkGrey,
    marginLeft: spacing[8]
  },
  imageGallery: {
    marginTop: spacing[12],
  },
  imageGalleryItem: {
    marginVertical: spacing[3],
    overflow: "hidden"
  },
  imageGalleryImage: {
    width: '100%',
    borderRadius: 12,
    alignSelf: "center",
  }
});

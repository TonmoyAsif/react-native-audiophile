import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import Text from "../components/text/text";
import AppHeader from "../components/app-header";
import CategoryTitle from "../components/category-title";
import { useDispatch, useSelector } from "react-redux";
import { selectSpeakers } from "../../redux/productSlice";
import { colors, spacing } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import CategoryFooter from "../components/category-footer";

export default function Speakers() {
  const speakers = useSelector(selectSpeakers);

  return (
    <SafeAreaView>
      <ScrollView>
        <AppHeader />
        <CategoryTitle title="speakers" />
        {/* <Pressable style={styles.backButton}>
          <Ionicons name="chevron-back-sharp" size={20} color="black" />
          <Text preset='light' style={{color: 'black'}}>Go Back</Text>
        </Pressable> */}
        <View style={styles.categorySection}>
          {speakers.map((speaker) => {
            return (
              <View key={speaker.name} style={styles.categoryBox}>
                <View style={styles.imageBox}>
                  <Image
                    source={speaker.featuredImage.source}
                    resizeMode="contain"
                    style={styles.image}
                  />
                </View>
                <View style={styles.information}>
                  <Text preset="h4" uppercase>
                    {speaker.name}
                  </Text>
                  <Text preset="h6" uppercase>
                    {speaker.category}
                  </Text>
                  <Text preset="light" style={styles.description}>
                    {speaker.description}
                  </Text>
                  <Pressable style={styles.button}>
                    <Text uppercase white>
                      See product
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>
        <CategoryFooter />
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
  categorySection: {
    marginHorizontal: spacing[5],
    marginTop: spacing[8],
    marginVertical: spacing[8],
  },
  categoryBox: {
    borderColor: colors.darkGrey,
    borderWidth: 0.5,
    borderRadius: spacing[4],
    marginBottom: spacing[10],
  },
  imageBox: {
    backgroundColor: colors.grey,
    borderRadius: spacing[4],
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[8],
  },
  image: {
    height: 250,
    width: "100%",
  },
  information: {
    marginTop: spacing[8],
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    marginVertical: spacing[5],
    marginHorizontal: spacing[5],
    color: "black",
    textAlign: "center",
  },
  button: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[5],
    backgroundColor: colors.primary,
    marginTop: spacing[3],
    marginBottom: spacing[10],
  },
});

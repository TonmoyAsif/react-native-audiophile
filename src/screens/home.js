import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/app-header";
import HomeBanner from "../components/home-banner";
import HomeCategory from "../components/home-category";
import { colors, spacing } from "../theme";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <AppHeader />
        <HomeBanner />
        <View style={styles.categorySection}>
          <HomeCategory
            title="Headphones"
            image={require("../../assets/images/home-headphone.png")}
            onPress={() => {
              navigation.navigate("Headphones");
            }}
          />
          <HomeCategory
            title="Speakers"
            image={require("../../assets/images/home-speaker.png")}
            onPress={() => {
              navigation.navigate("Speakers");
            }}
          />
          <HomeCategory
            title="Earphones"
            image={require("../../assets/images/home-earphone.png")}
            onPress={() => {
              navigation.navigate("Earphones");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  categorySection: {
    paddingTop: spacing[10],
  },
});

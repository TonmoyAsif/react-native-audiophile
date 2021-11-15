import React, {useEffect} from "react";
import { ScrollView, StyleSheet, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/app-header";
import HomeBanner from "../components/home-banner";
import HomeCategory from "../components/home-category";
import { colors, spacing } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectStatus, selectFeaturedProducts } from "../../redux/productSlice";

export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  const featuredProducts = useSelector(selectFeaturedProducts)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  //todo only show loading to featured products section
  if (status === "loading") {
    return (
      <View style={styles.activity_indicator}>
        <ActivityIndicator size='large' color={colors.primary} />
      </View>
    );
  }

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
        {/* <View style={styles.featuredSection}>
          <View style={styles.featuredSectionTitle}>
            <Text style={styles.featuredSectionTitleText}>Featured Products</Text>
          </View>
          <View style={styles.featuredSectionProducts}>
            {featuredProducts.map((product) => (
              <HomeProduct
                key={product.id}
                product={product}
                onPress={() => {
                  navigation.navigate("Product", { product });
                }}
              />
            ))}
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  categorySection: {
    paddingTop: spacing[10],
  },
  activity_indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

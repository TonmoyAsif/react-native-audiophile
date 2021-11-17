import React, {useEffect} from "react";
import { ScrollView, StyleSheet, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/app-header";
import HomeBanner from "../components/home-banner";
import HomeCategory from "../components/home-category";
import { colors, spacing } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectStatus, selectFeaturedProducts } from "../../redux/productSlice";
import Text from "../components/text/text";
import FeaturedProduct from "../components/featured-product";

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
        <View style={styles.featuredSection}>
          <View style={styles.featuredSectionTitle}>
            <Text preset='h5' uppercase>Featured</Text>
            <Text preset='h5' uppercase>Products</Text>
          </View>
          <View>
            {
              featuredProducts.map((product) => {
                const { id, name, category, featuredImage } = product;
                return (
                  <FeaturedProduct
                    key={product.id}
                    id={id}
                    name={name}
                    category={category}
                    image={featuredImage}
                    onPress={ () => {}}
                  />
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
  categorySection: {
    paddingTop: spacing[10],
  },
  activity_indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  featuredSection: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  featuredSectionTitle: {
    alignItems: "center",
  }
});

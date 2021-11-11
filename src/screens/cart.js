import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../components/text/text";
import { spacing } from "../theme";
// import LottieView from 'lottie-react-native';

export default function Cart() {
  const cart = [];

  if( cart.length === 0 ) {
    return (
      <SafeAreaView style={styles.emptyCart}>
        <Text style={styles.emptyLottie}>Your cart is empty</Text>
        {/* <LottieView style={styles.scrollDownIcon} 
          source={require('../../assets/images/empty-cart.json')}
          autoPlay loop={false}
          style={styles.emptyLottie}
        />; */}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>Cart</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  emptyCart: {
    flex: 1,
    margin: spacing[5]
  },
  emptyLottie: {
    alignSelf: 'center',
  }
});
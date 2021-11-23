import React from "react";
import { StyleSheet, ScrollView, View, Pressable, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../components/text/text";
import { colors, spacing } from "../theme";
import LottieView from 'lottie-react-native';
import AppHeader from "../components/app-header";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, selectTotalAmount, addToCart, deleteFromCart, reset } from "../../redux/cartSlice";
import CounterButton from "../components/counter-button";

export default function Cart({ navigation }) {
  const cart = useSelector(selectCart);
  const totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();

  const resetCart = () => {
    dispatch(reset());
  };

  const onPressCheckout = () => {
    navigation.navigate("Checkout");
  };


  const onAmountChange = (value, cartItem) => {
    if(value === 0) {
      return Alert.alert(
        "Remove item?",
        "Do you want to remove this item from cart?",
        [
          {
            text: "Cancel",
            style: "cancel",
            onPress: () => {}
          },
          {
            text: "Confirm",
            onPress: () => dispatch(deleteFromCart({ id: cartItem.id }))
          }
        ]
      );
    }

    const cartProduct = {
      ...cartItem,
      quantityPrice: value * cartItem.price,
      amount: value
    }
    dispatch(addToCart({ cartProduct }))
  }

  if( cart.length === 0 ) {
    return (
      <SafeAreaView style={styles.emptyCart}>
        <LottieView style={styles.emptyLottie} 
          source={require('../../assets/images/empty-cart.json')}
          autoPlay loop={false}
          style={styles.emptyLottie}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <AppHeader />
        <View style={styles.cartContainer}>
          <View style={styles.header}>
            <Text preset='h6' uppercase style={styles.headerText}>
              {`Cart (${cart.length})`}
            </Text>
            <Pressable onPress={resetCart}>
              <Text centered style={styles.removeText}>
                Remove all
              </Text>
            </Pressable>
          </View>
        </View>
        {
          cart.map(item => {
            const { id, name, featuredImage, price, quantityPrice, amount } = item;
            return (
              <View key={id} style={styles.cartItem}>
                <View style={styles.imageBox}>
                  <Image source={featuredImage.source} resizeMode='contain' style={styles.image}/>
                </View>
                <View style={styles.details}>
                  <Text preset='title'>{name}</Text>
                  <Text preset='subtitle' style={styles.price}>{`$ ${quantityPrice}`}</Text>
                </View>
                <CounterButton
                  amount={amount}
                  buttonWidth={120}
                  setAmount={(value) => { onAmountChange(value, item) }} 
                />
              </View>
            )
          })
        }
        <View style={styles.totalPriceBox}>
          <Text preset='h8' uppercase style={styles.price}>Total</Text>
          <Text preset='h7'> {`$ ${totalAmount}`}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', margin: spacing[5]}}>
          <Pressable style={styles.button} onPress={onPressCheckout}>
            <Text uppercase white>
              Checkout
            </Text>
          </Pressable>
        </View>
      </ScrollView>
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
  },
  container: {
    flex: 1
  },
  cartContainer: {
    margin: spacing[5]
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  removeText: {
    textDecorationLine: 'underline',
    color: colors.darkGrey
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
  },
  imageBox: {
    backgroundColor: colors.grey,
    borderRadius: spacing[3],
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[3]
  },
  image: {
    height: 50,
    width: 50
  },
  details: {
    flex: 1,
    marginLeft: spacing[5] 
  },
  price: {
    color: colors.darkGrey
  },
  totalPriceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: spacing[5]
  },
  button: {
    width: '90%',
    height: 45,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
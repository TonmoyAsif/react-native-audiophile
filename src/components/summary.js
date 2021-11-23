import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import Text from "./text/text";
import { colors, spacing } from "../theme";
import PriceView from './price-view';

export default function Summary({ cartItems, totalPrice, shippingPrice, vat, onPressPay }) {

  return (
    <View style={styles.container}>
      <Text preset="h6">Summary</Text>
      <View style={styles.content}>
        {cartItems.map((item) => {
          const { featuredImage, name, quantityPrice, amount } = item;
          return (
            <View key={name} style={styles.product}>
              <View  style={styles.productLeft}>
                <View style={styles.imageBox}>
                  <Image style={styles.image}
                    resizeMode="contain"
                    source={featuredImage.source}
                  />
                </View>
                <View style={styles.details}>
                  <Text preset="title">{name}</Text>
                  <Text textColor="#757575">${quantityPrice}</Text>
                </View>
              </View>
              <Text textColor="#757575">x{amount}</Text>
            </View>
          );
        })}

        <View style={styles.priceBox}>
          <PriceView title="Total" price={totalPrice} />
          <PriceView title="Shipping" price={shippingPrice} />
          <PriceView title="VAT (INCLUDED)" price={vat} />
          <PriceView
            title="Grand total"
            price={totalPrice + shippingPrice + vat}
            priceStyle={{ color: colors.primary }}
          />
        </View>

        <Pressable style={styles.button} onPress={onPressPay}>
          <Text uppercase white>Continue & Pay</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: spacing[2],
        marginBottom: spacing[8],
        marginHorizontal: spacing[8],
    },
    content: {
        marginTop: spacing[5]
    },
    product: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    productLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    imageBox: {
        backgroundColor: colors.grey,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        padding: spacing[3],
    },
    image: {
        height: 40,
        width: 40,
    },
    details: {
        marginLeft: spacing[4]
    },
    priceBox: {
        marginVertical: spacing[4]
    },
    button: {
        marginTop: spacing[2],
        paddingVertical: spacing[3],
        paddingHorizontal: spacing[5],
        backgroundColor: colors.primary,
        alignItems: "center"
    }
  });

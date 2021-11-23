import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from "./text/text";
import { colors, spacing } from '../theme';

export default function PriceView({title, price, priceStyle}) {
    return (
        <View style={styles.box}>
            <Text uppercase style={styles.title}>{title}</Text>
            <Text preset="h6" style={[priceStyle]}>{`$${price}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: spacing[1],
      marginHorizontal: spacing[3],
    },
    title: {
        color: colors.darkGrey,
    }
  });

import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './text/text'
import { colors, spacing } from "../theme"

export default function CategoryTitle({ title }) {
    return (
        <View style={styles.container}>
            <Text uppercase white preset="h4">{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.black,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: spacing[3]
    },
  });

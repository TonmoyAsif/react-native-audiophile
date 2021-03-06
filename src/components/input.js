import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Text from './text/text'
import { colors, spacing, typography } from '../theme'


export default function Input({ label, placeholder, keyboard='default', onChangeText, onBlur }) {
    return (
        <View style={styles.box}>
            <Text preset="subtitle" style={styles.title}>
                {label}
            </Text>
            <TextInput 
                placeholder={placeholder}
                style={styles.field}
                keyboardType={keyboard}
                onChangeText={onChangeText}
                onBlur={onBlur}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        paddingVertical: spacing[3]
    },
    title: {
        paddingBottom: spacing[3]
    },
    field: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#cfcfcf',
        padding: 12,
        fontFamily: typography.regular,
    }
  });

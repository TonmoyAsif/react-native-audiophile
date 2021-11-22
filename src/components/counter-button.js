import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "./text/text";
import { colors, spacing } from "../theme";

export default function CounterButton({ style, amount, setAmount, buttonWidth=140 }) {
    const onIncrement = () => {
        setAmount(amount + 1);
    };
    const onDecrement = () => {
        if(amount > 0) {
            setAmount(amount - 1);
        }
    };

    return (
        <View style={[styles.wrapper,style, {width: buttonWidth}]}>
            <Pressable onPress={onDecrement} style={styles.counterBtn}>
                <Text preset='h7' textColor={colors.darkGrey}>-</Text>
            </Pressable>
            <Text style={styles.countText}>{amount}</Text>
            <Pressable onPress={onIncrement} style={styles.counterBtn}>
                <Text preset='h7' textColor={colors.darkGrey}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        height: 53,
        flexDirection: "row",
        backgroundColor: colors.grey
    },
    counterBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
    

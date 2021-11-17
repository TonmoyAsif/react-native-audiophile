import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "./text/text";
import { colors, spacing } from "../theme";

export default function CounterButton({ style }) {
    const [count, setCount] = React.useState(0);
    const onIncrement = () => {
        setCount(count + 1);
    };
    const onDecrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <View style={[styles.wrapper,style ]}>
            <Pressable onPress={onDecrement} style={styles.counterBtn}>
                <Text preset='h7' textColor={colors.darkGrey}>-</Text>
            </Pressable>
            <Text style={styles.countText}>{count}</Text>
            <Pressable onPress={onIncrement} style={styles.counterBtn}>
                <Text preset='h7' textColor={colors.darkGrey}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        width: 140,
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
    

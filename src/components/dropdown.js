import React from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Text from "./text/text";
import { colors, spacing, typography } from "../theme";

export default function Dropdown({ label, open, value, items, setOpen, setValue, setItems }) {
  return (
    <View style={styles.box}>
      <Text preset="subtitle" style={styles.title}>
        {label}
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode="SCROLLVIEW"
        textStyle={{
          fontFamily: typography.regular,
        }}
        style={{
          borderColor: "#cfcfcf",
        }}
        placeholderStyle={{
          color: "grey",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    paddingVertical: spacing[3],
  },
  title: {
    paddingBottom: spacing[3],
  }
});

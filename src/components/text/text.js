import React from "react";
import { Text as ReactNativeText } from "react-native";
import { presets } from "./text.preset";
import { mergeAll, flatten } from "ramda";

export default function Text(props) {
  const {
    preset = "default",
    children,
    style: styleOverride,
    textColor,
    centered,
    white,
    uppercase,
    ...rest
  } = props;

  const style = mergeAll(
    flatten([presets[preset] || presets.default, styleOverride])
  );

  return (
    <ReactNativeText
      {...rest}
      style={[
        style,
        textColor && { color: textColor },
        centered && { textAlign: "center" },
        white && { color: "#fff" },
        uppercase && { textTransform: "uppercase" },
      ]}
    >
      {children}
    </ReactNativeText>
  );
}

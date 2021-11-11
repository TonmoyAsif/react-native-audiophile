import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import store from "./redux/store";
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Light": require("./assets/fonts/Manrope-Light.ttf")
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
          <FlashMessage position="top" floating statusBarHeight={30} />
        </SafeAreaProvider>
      </Provider>
    );
  }
}

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import AppHeader from "../components/app-header";
import CategoryTitle from "../components/category-title";

export default function Earphones() {
  return (
    <SafeAreaView>
      <ScrollView>
        <AppHeader />
        <CategoryTitle title="earphones" />
      </ScrollView>
    </SafeAreaView>
  );
}
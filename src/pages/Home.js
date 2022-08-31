import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Everson!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: "#f7f7f7",
    fontSize: 24,
    fontWeight: "bold",
  },
});

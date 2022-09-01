import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface AddSkill {
  addSkill: () => void;
}

export function Button({ addSkill }: AddSkill) {
  return (
    <TouchableOpacity
      onPress={addSkill}
      style={styles.button}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
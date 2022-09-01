import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export function SkillCard({ skill, removeSkill }) {
  return (
    <TouchableOpacity
      onPress={() => removeSkill(skill)}
      style={styles.buttonSkill}
    >
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 12,
    borderRadius: 25,
    marginTop: 20,
    alignItems: "center",
  },
  textSkill: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

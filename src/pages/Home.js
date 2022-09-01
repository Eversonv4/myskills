import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
    setNewSkill("");
  }

  function handleRemoveSkill(skillName) {
    const response = mySkills.filter((skill) => skill !== skillName);

    setMySkills(response);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Everson!</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        type="text"
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <Button addSkill={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>

      <ScrollView>
        {mySkills.length > 0 &&
          mySkills.map((skill) => (
            <SkillCard
              skill={skill}
              key={skill}
              removeSkill={handleRemoveSkill}
            />
          ))}
      </ScrollView>
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
  input: {
    backgroundColor: "#1F1E25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});

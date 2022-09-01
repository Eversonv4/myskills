import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Platform,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  nameSkill: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    if (newSkill === "") {
      return;
    }

    const data = {
      id: String(new Date().getTime()),
      nameSkill: newSkill,
    };

    setMySkills((oldState) => [...oldState, data]);
    setNewSkill("");
  }

  function handleRemoveSkill(skillId: string) {
    const response = mySkills.filter((skill) => skill.id !== skillId);

    setMySkills(response);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning!");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon!");
    } else {
      setGreeting("Good Night!");
    }
  }, [mySkills]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Everson!</Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        //   keyboardType="numeric"
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <Button addSkill={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item} removeSkill={handleRemoveSkill} />
        )}
      />
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
  greetings: {
    color: "#fff",
  },
});

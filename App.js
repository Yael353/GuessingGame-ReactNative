import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [correctNumber, setCorrectNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  function handleGuess() {
    const userGuess = parseInt(userInput);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      Alert.alert("Invalid input", "You must guess a number between 1 and 10");
      return;
    }

    if (userGuess === correctNumber) {
      setMessage("Congratulations, you guessed correctly!");
    } else {
      setUserInput(""); // Clear the input field
      if (userGuess < correctNumber) {
        setMessage("Your guess is too low, try a higher number.");
      } else {
        setMessage("Your guess is too high, try a lower number.");
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>The guessing game</Text>

      <TextInput
        style={styles.input}
        placeholder="Guess a number between 1-10"
        keyboardType="numeric"
        value={userInput}
        onChangeText={(text) => setUserInput(text)}
      />

      <Button style={styles.button} title="Submit" onPress={handleGuess} />

      <Text style={styles.message}>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  h1: {
    marginBottom: 10,
    fontSize: 20,
    color: "black",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
    width: "80%",
    textAlign: "center",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 4,
    width: "80%",
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: "black",
  },
});

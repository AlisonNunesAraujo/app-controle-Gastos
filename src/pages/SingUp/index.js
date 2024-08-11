import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { AuthProvider } from "../../contextApi/context";
import { useContext } from "react";

export default function SignUp() {
  const { SingUp, loading } = useContext(AuthProvider);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function HendlePost() {
    SingUp(nome, email, password);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>tela de cadastro</Text>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Senha"
          keyboardType="numeric"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.buttom} onPress={HendlePost}>
          {loading ? (
            <ActivityIndicator size={30} color={"white"} />
          ) : (
            <Text style={styles.text}>Cadastrar</Text>
          )}
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  input: {
    width: "70%",
    borderWidth: 0.3,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  buttom: {
    padding: 10,
    backgroundColor: "black",
    width: "70%",
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

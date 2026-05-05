import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginApi } from "../services/api";

export default function LoginScreen({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  const cleanEmail = email.trim();
  const cleanPassword = password.trim();

  // ✅ VALIDATION
  if (!cleanEmail || !cleanPassword) {
    alert("Please enter email and password");
    return;
  }

  try {
    const res = await loginApi(cleanEmail, cleanPassword);

    await AsyncStorage.setItem("token", res.token);

    setIsLoggedIn(true);
  } catch (e) {
    alert("Invalid Login");
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hospital Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 8 },
  btn: { backgroundColor: "#2E86DE", padding: 15, borderRadius: 8 },
  btnText: { color: "#fff", textAlign: "center" },
});
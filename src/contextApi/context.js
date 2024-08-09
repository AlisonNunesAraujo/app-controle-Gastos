import React, { createContext, useState } from "react";

import api from "../services";
import { useNavigation } from "@react-navigation/native";

export const AuthProvider = createContext({});

export default function AuthContext({ children }) {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function SingUp(nome, email, password) {
    setLoading(true);
    try {
      const response = await api.post("/users", {
        name: nome,
        password: password,
        email: email,
      });

      setLoading(false);
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  async function SingIn(email, password) {
    setLoading(true);
    try {
      const resposta = await api.post("login", {
        email: email,
        password: password,
      });

      const { name, token, id } = resposta.data;

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUser(id, email, name);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <AuthProvider.Provider
      value={{ Signed: !!user, user, SingUp, SingIn, loading }}
    >
      {children}
    </AuthProvider.Provider>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthContext from "./src/contextApi/context";


import AuthRouts from "./src/Routs/authrouts";

export default function App() {
  return (
    <NavigationContainer>
      <AuthContext>
        <AuthRouts/>
      </AuthContext>
    </NavigationContainer>
  );
}

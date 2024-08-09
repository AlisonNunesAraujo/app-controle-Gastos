import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { AuthProvider } from "../../contextApi/context";
import { useContext } from "react";

import Render from "../../components/renderSaldo";
import api from "../../services";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import RenderMovimentsDay from "../../components/renderMoviments";

export default function Home() {
  const { user} = useContext(AuthProvider);

  const IsFocused = useIsFocused();

  const [date, setDate] = useState(new Date());
  const [valor, setValor] = useState([]);
  const [moviments, setMoviments] = useState([]);

  useEffect(() => {
    
    async function Get() {
      let dataHoje = format(date, "dd/MM/yyyy");

      const balance = await api.get("/balance", {
        params: {
          date: dataHoje,
        },
      });

      setValor(balance.data);

      const itens = await api.get("/receives", {
        params: {
          date: dataHoje,
        },
      });

      setMoviments(itens.data);
    }

    Get();
  }, [date, IsFocused]);

  async function Delete(id) {
    try {
      await api.delete("/receives/delete", {
        params: {
          item_id: id,
        },
      });
      setDate(new Date());

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView >
      <StatusBar barStyle="ligth-content"/>
      <View style={styles.header}>
        <Text style={styles.title}>Olá, Bem Vindo!</Text>
      </View>

      <FlatList
        data={valor}
        keyExtractor={(item) => item.tag}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Render data={item} />
        
      }
      />

      <View style={styles.titleItens}>
        <Text style={styles.text}>Registros de hoje</Text>
      </View>

      <FlatList
        data={moviments}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <RenderMovimentsDay data={item} DeleteItem={Delete} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 30,
    marginLeft: 30,
    marginTop: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: 'black'
  },
  titleItens: {
    height: 30,
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: 'black',
  },
});

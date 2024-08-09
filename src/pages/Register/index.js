import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Keyboard,
  Alert,
} from "react-native";

import api from "../../services";

import { format } from "date-fns";

export default function RegisterItem() {


    const [description, setDescription] = useState('')
    const [valor, setValor] = useState('')


  async  function RegisterType(tipo){
        try{
            await  api.post('/receive',{
                description: description,
                value: Number(valor),
                type: tipo,
                date: format(new Date(), 'dd/MM/yyyy')
            })

            Alert.alert('Registrado', 'Seu item foi registrado!')

            setDescription('')
            setValor('')

        }catch(err){
            console.log(err)
        }
    }






  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.register}>
          
          <TextInput placeholder="Digite uma descrição" value={description} onChangeText={setDescription} style={styles.input} />
          <TextInput
            placeholder="Digite o valor"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
            style={styles.input}
          />
          
        </View>

        <View style={styles.safeButtom}>
          <TouchableOpacity style={styles.buttom} onPress={ () => RegisterType('receita') }>
            <Text style={styles.textButtom}>Receita</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttom} onPress={ () => RegisterType('despesa') }>
            <Text style={styles.textButtom}>Despesa</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  
  register: {
    width: "100%",
    height: 200,
  },
  input: {
    backgroundColor: 'white',
    width: "90%",
    padding: 20,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 12,
  },
  safeButtom: {
    width: "100%",
    alignItems: "center",
  },
  buttom: {
    backgroundColor: "white",
    width: "90%",
    height: 50,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 0.3,
  },
  textButtom:{
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  }
});

import React, { useMemo } from "react";
import { View,Text, StyleSheet } from "react-native";

export default function Render({data}){

    

    const Texto = useMemo( () => {
        if(data.tag === 'saldo'){
          return{
            label: 'Saldo',
          }
        }else if(data.tag === 'receita'){
          return{
            label: 'Ganhos'
          }
        }
        else{
          return{
            label: 'Despesa',
          }
        }
          
      },[data] )

    return(
        <View style={styles.crud}>
          <View style={styles.container}>
            <Text style={styles.text}>{Texto.label}</Text>
            <Text style={styles.textsaldo}>R$ {data.saldo}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
  crud:{
      height: 100,
      alignItems: 'center',
  },
    container:{ 
      width: '90%',     
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 1, 
      margin: 5,
      borderRadius: 5,
      backgroundColor: 'white',
      
        
    },
    text:{
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
    },
    textsaldo:{
        fontSize: 15,
        color: 'black',
        marginTop: 12,
    },
})
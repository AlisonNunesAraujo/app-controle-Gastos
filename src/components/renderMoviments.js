import React from "react";
import { View,Text,StyleSheet, TouchableWithoutFeedback, Alert } from "react-native";


export default function RenderMovimentsDay({data, DeleteItem}){

    function Excluir(){
        Alert.alert('Atenção', 'Deseja mesmo apagar?',[
        
            {
             text: 'Cancelar',
             style: 'cancel',
            },
            {
             text: 'Confirmar',
             onPress:( ) => DeleteItem(data.id)
            }
         ])
    }


    return(
        <TouchableWithoutFeedback onLongPress={Excluir}>
            
            <View style={styles.card}>
                
                    <Text style={styles.type}>{data.type}</Text>
                    <Text style={styles.value}>R$ {data.value}</Text>
               
             </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card:{
        width: '90%',
        height: 70,
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        marginLeft: 23,
        backgroundColor: 'white'
    },
    type:{
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 5,
    },
    value:{
        fontWeight: '500',
        marginLeft: 5,
    },
    
   
})
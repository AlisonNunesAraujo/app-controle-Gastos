import React, {useContext} from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import { AuthProvider } from "../../contextApi/context";
import { useNavigation } from "@react-navigation/native";



export default function Profile(){
    const navigation = useNavigation();
    const{user} = useContext(AuthProvider)
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem Vindo! Que bom te ver aqui!</Text>

            <TouchableOpacity style={styles.buttom} onPress={ () => navigation.navigate('Inicio') }>
                <Text style={styles.text}>Voltar para o Inicio</Text>
            </TouchableOpacity>
           
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
    },
    title:{
        fontSize: 15,
        fontWeight: '600',
    },
    buttom:{
        width: '50%',
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 30,
    },

    text:{
        fontSize: 15,
        fontWeight: '700',
    }
})
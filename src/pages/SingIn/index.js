import React, { useState } from 'react'
import { View,Text, TextInput, 
Keyboard,
TouchableOpacity,
TouchableWithoutFeedback,
StyleSheet } from 'react-native'


import { AuthProvider } from '../../contextApi/context';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native'

export default function SingIn(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    const {user,SingIn} = useContext(AuthProvider)

    function HendleLogin(){
        SingIn(email,password)
    }


    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
            <View style={styles.container}>
                <Text>Login</Text>

                <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={setEmail}/>
                <TextInput placeholder='senha' keyboardType='numeric' secureTextEntry style={styles.input} value={password} onChangeText={setPassword}/>

                <TouchableOpacity style={styles.buttom} onPress={HendleLogin}>
                    <Text style={styles.textbutom}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate("SingUp") }>
                    <Text>Criar uma conta</Text>
                </TouchableOpacity>

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    input:{
       width: '80%',
       borderWidth: 1,
       margin: 5,
       padding: 15,
       borderRadius: 10,
       
    },
    buttom:{
        width: '80%',
        height: 40,
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    textbutom:{
        color: 'white',
        fontWeight: '700',
    }
})
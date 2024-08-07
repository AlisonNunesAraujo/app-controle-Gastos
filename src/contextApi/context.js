import React,{createContext, useState} from "react";

import api from "../services";
import { useNavigation } from "@react-navigation/native";

export const AuthProvider = createContext({});

export default function AuthContext({children}){

    const [user, setUser] = useState(false)
    const navigation = useNavigation();

    async function SingUp(nome, email, password){
       try{
            const response = await api.post('/users',{
                name: nome,
                password: password,
                email: email,
            })

            navigation.goBack();
       }catch(err){
        console.log(err)
       }
        
    }

    async function SingIn(email, password){
        try{
            const resposta = await api.post('login',{
                email: email,
                password: password,
            })

            const {name, token,id} = resposta.data

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            setUser(id,email,name)

        }catch(err){
            console.log(err)
        }

    }

    return(
        <AuthProvider.Provider value={{Signed: !!user, SingUp , SingIn}}>
            {children}
        </AuthProvider.Provider>
    )
}
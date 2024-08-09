import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import RegisterItem from "../pages/Register";

import {Ionicons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle:{
                backgroundColor: 'black',
                
            }
        }}>
            <Tab.Screen name="Inicio" component={Home} options={{
                tabBarIcon: ({color, size}) => {return <Ionicons name="home" size={size} color={color}/>  
            },
               
            }}
                
            />
            <Tab.Screen name="Registro" component={RegisterItem} options={{
                tabBarIcon: ({color, size}) => {
                    return <Ionicons name="document-text" size={size} color={color}/>
                }
            }}/>
            <Tab.Screen name="Perfil" component={Profile} options={{
                tabBarIcon: ({color, size}) => {
                    return <Ionicons name="person-circle" size={28} color={color}/>
                }
            }}/>
        </Tab.Navigator>
    )
}
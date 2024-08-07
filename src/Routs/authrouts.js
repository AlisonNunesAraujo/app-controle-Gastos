import React from "react";
import { AuthProvider } from "../contextApi/context";
import { useContext } from "react";

import Tabs from "./authdrawer";
import RouteStack from "./authstack";


export default function AuthRouts(){
    const {Signed} = useContext(AuthProvider)
    return(
        Signed ? <Tabs/> : <RouteStack/>
    )
}
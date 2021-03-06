import React, { useState, createContext } from "react";

import { api } from "../services/api";

export const AccessContext = createContext();

export const CounterSiteAccessContext = ({ children }) => {

    let [myAccess, setMyAccess] = useState();

    const addNewAccess = async () => {
        await api.post(`/new-geral-access`)
            .then(async (res) => res)
            .catch(async (err) => await alert("Error! Problema na contagem de acessos: "+err))
        
        await api.post(`/new-access`)
            .then(async (res) => res)
            .catch(async (err) => await alert("Error! Problema na contagem de acessos: "+err))
    }

    const addPostAccess = async (id, access) => {
        await api.post(`/add-post-access/${id}`,{
            acessos: Number(access) + 1
        })
            .then(res => res)
            .catch(err => err)
    }

    return(
        <AccessContext.Provider value={{myAccess, addNewAccess, addPostAccess}}>
            {children}
        </AccessContext.Provider>
    )
}
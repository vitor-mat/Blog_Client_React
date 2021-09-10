import React, { useState, createContext } from "react";

import { api } from "../services/api";

export const AccessContext = createContext();

export const AllSiteAccessContext = ({ children }) => {

    let [myAccess, setMyAccess] = useState();

    const startAccessCount = () => {
        api.post("/new-access")
            .then(async (res) => await alert("Parabéns! Você é a primeira pessoa a visita este blog!"))
            .catch(async (err) => await alert("Foi mau, não dá pra contar agora."))
    }

    const getCurrentlyAccess = () => {

        api.get("/all-access")
        .then(async (res) => {
            await setMyAccess(myAccess = res.data)

            if(myAccess.length > 0){
                return myAccess
            }

            await startAccessCount()

            return;
        })
        .catch(err => console.log(err))

    }

    return(
        <AccessContext.Provider value={{getCurrentlyAccess}}>
            {children}
        </AccessContext.Provider>
    )
}
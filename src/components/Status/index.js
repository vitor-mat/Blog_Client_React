import React, { useContext, useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./style";

export const Status = () => {

    //const { postData, getPostDatas } = useContext(MyContext);

    let [siteAccess, setSiteAccess] = useState([]);


    

            api.get("/site-access")
            .then(res => setSiteAccess(siteAccess = res.data))
            .catch(err => console.log(err))


    return(
        <Container>
            <h2>Status</h2>
            <div>
                <span>Nº Posts: 0</span>
                {siteAccess.map(value => <span key={value.id}>{`Nº acessos: ${value.allAccess}`}</span>)}
            </div>
        </Container>
    )
}
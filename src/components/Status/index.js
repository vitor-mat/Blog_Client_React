import React, { useContext, useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./style";

export const Status = () => {

    //const { postData, getPostDatas } = useContext(MyContext);

    let [siteAccess, setSiteAccess] = useState([]);

    let [posts, setPosts] = useState([])

    useEffect(() => {
        api.get("/site-access")
            .then(res => setSiteAccess(siteAccess = res.data))
            .catch(err => console.log(err))
        
        api.get("/posts")
            .then(async (response) => {
                await setPosts(posts = response.data)
                console.log(posts)
            })
            .catch((err) => ("Infelizmente deu fail: "+err))
    }, [])


    return(
        <Container>
            <h2>Status</h2>
            <div>
                <span>Nº Posts: {posts.length}</span>
                {siteAccess.map(value => <span key={value.id}>{`Nº acessos: ${value.allAccess}`}</span>)}
            </div>
        </Container>
    )
}
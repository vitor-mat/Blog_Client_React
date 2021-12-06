import React, { useState, useEffect } from 'react';

import { Container } from "./style";

import { api } from "../../services/api";

import { Card } from "../card/index";

import { BtnDelete } from "../Btn_Delete";
import { BtnEdit } from "../Btn_Edit";

export const PostsDashboard = () => {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        api.get("/posts")
        .then(async (response) => {
            await setPosts(posts = response.data)
        })
        .catch((err) => ("Infelizmente deu fail: "+err))
    }, [])

    return(
        <Container>
            <h2>Meus Posts</h2>
            {
                posts.map((value) => {
                    return <Card key={value.id} edit={<BtnEdit postDatas={value}/>} delete={<BtnDelete  id={value.id}/>} title={value.title} description={value.description} content={value.content}/>
                })
            }

        </Container>
    )
}
import React, { useState } from 'react';

import { Container } from "./style";

import { api } from "../../services/api";

import { Card } from "../card/index";

import { BtnDelete } from "../Btn_Delete";
import { BtnEdit } from "../Btn_Edit";

export const PostsDashboard = () => {

    let [posts, setPosts] = useState([])

    api.get("/posts")
        .then((response) => setPosts(posts = response.data))
        .catch((err) => ("Infelizmente deu fail: "+err))

    return(
        <Container>

            {
                posts.map((value) => {
                    return <Card key={value.description} edit={<BtnEdit />} delete={<BtnDelete />} title={value.title} description={value.description} content={value.content}/>
                })
            }

        </Container>
    )
}
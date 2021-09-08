import React from 'react';

import { Container } from "./style";

import { api } from "../../services/api";

import { Card } from "../card/index";

import { BtnDelete } from "../Btn_Delete";
import { BtnEdit } from "../Btn_Edit";

export const PostsDashboard = () => {

    api.get("/posts")
        .then((response) => console.log(response.data))
        .catch((err) => ("Infelizmente deu fail: "+err))

    return(
        <Container>
            <Card edit={<BtnEdit />} delete={<BtnDelete />} title="O novo mundo" description="Um mundo de maiores desafios no mundo pirata" content="Luffy e seus amigos prtem para o novo mundo, aonde moram os yonkous, em busca da ultima ilha, aonde está o tesouro final do gol d roger."/>
            <Card edit={<BtnEdit />} delete={<BtnDelete />} title="novo mundo" description="Um mundo de maiores desafios no mundo pirata" content="Luffy e seus amigos prtem para o novo mundo, aonde moram os yonkous, em busca da ultima ilha, aonde está o tesouro final do gol d roger."/>
            <Card edit={<BtnEdit />} delete={<BtnDelete />} title="O novo " description="Um mundo de maiores desafios no mundo pirata" content="Luffy e seus amigos prtem para o novo mundo, aonde moram os yonkous, em busca da ultima ilha, aonde está o tesouro final do gol d roger."/>
        </Container>
    )
}
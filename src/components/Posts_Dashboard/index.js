import React from 'react';

import { Container } from "./style";

import { Card } from "../card/index";

import { BtnDelete } from "../Btn_Delete";
import { BtnEdit } from "../Btn_Edit";

export const PostsDashboard = () => {


    return(
        <Container>
            <Card edit={<BtnEdit />} delete={<BtnDelete />} title="O novo mundo" description="Um mundo de maiores desafios no mundo pirata" content="Luffy e seus amigos prtem para o novo mundo, aonde moram os yonkous, em busca da ultima ilha, aonde está o tesouro final do gol d roger."/>
            <Card edit={<BtnEdit />} delete={<BtnDelete />} title="novo mundo" description="Um mundo de maiores desafios no mundo pirata" content="Luffy e seus amigos prtem para o novo mundo, aonde moram os yonkous, em busca da ultima ilha, aonde está o tesouro final do gol d roger."/>
            <Card edit={<BtnEdit />} delete={<BtnDelete />} title="O novo " description="Um mundo de maiores desafios no mundo pirata" content="Luffy e seus amigos prtem para o novo mundo, aonde moram os yonkous, em busca da ultima ilha, aonde está o tesouro final do gol d roger."/>
        </Container>
    )
}
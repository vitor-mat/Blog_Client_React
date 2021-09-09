import React from "react";

import { api } from "../../services/api";

import { Button } from "./style";

export const BtnDelete = (props) => {

    const handleDeletePosts = () => {
        api.delete(`/delete/${props.id}`)
            .then(res => alert(props.id))
            .catch(err => alert("Não foi possivel deletar o post: "+err))
    }

    return(
        <Button onClick={handleDeletePosts}>
            Deletar
        </Button>
    )
}
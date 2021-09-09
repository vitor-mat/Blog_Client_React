import React, { useContext } from "react";

import { Link } from 'react-router-dom';

import { Button } from "./style";

import { MyContext } from "../../context/EditPostsContext";

export const BtnEdit = (props) => {
    const { getPostDatas } = useContext(MyContext)


    return(
        <Link to="/dashboard/posts/editar">
            <Button onClick={() => {
                getPostDatas(props.postDatas.id, props.postDatas.title, props.postDatas.description, props.postDatas.content)
            }}>
                Editar
            </Button>
        </Link>
    )
}
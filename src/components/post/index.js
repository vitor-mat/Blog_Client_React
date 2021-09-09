import React from "react";

import { Container } from "./style";

export const Post = (props) => {
    return(
        <Container>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <hr></hr>
            <br></br>
            <p>{props.content}</p>
        </Container>
    )
}
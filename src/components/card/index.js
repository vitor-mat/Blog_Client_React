import React from "react";

import { Container } from "./style";

export const Card = (props) => {
    return(
        <Container>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <p>{props.content}</p>
            <div id="btn-divs">
                {props.delete}
                {props.edit}
            </div>
        </Container>
    )
}
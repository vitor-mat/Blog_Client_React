import React from "react";

import { Container } from "./style";

export const Form = (props) => {
    return(
        <Container>
            <div id="title-form-cadastrar-div">
                <h2>{props.purpose} Post</h2>
            </div>
            <form>
                <div id="title-input-div">
                    <input placeholder="Title"/>
                    <span>0/20</span>
                </div>
                <div id="description-textarea-div">
                    <textarea placeholder="Description"/>
                    <span>0/100</span>
                </div>
                <div id="content-textarea-div">
                    <textarea placeholder="Content" disable="true"/>
                    <span>0/1000</span>
                </div>
                <div id="btn-cadastrar-div">
                    <button onClick={(e) => {
                        e.preventDefault();
                    }}>{props.purpose}</button>
                </div>
            </form>            
        </Container>
    )
}
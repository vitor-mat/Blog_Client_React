import React, { useState } from "react";

import { Container } from "./style";

export const Form = (props) => {

    let [maxCharacterTitle, setMaxCharacterTitle] = useState("");
    let [maxCharacterDescription, setMaxCharacterDescription] = useState("");
    let [maxCharacterContent, setMaxCharacterContent] = useState("");

    const handleMaxCharacterTitle = (e) => {
        if(maxCharacterTitle.length < 20){
            setMaxCharacterTitle(maxCharacterTitle = e.target.value)
        }else{
            alert("Atingiu o limite de caracteres para o titulo!")
        }
    }

    const handleMaxCharacterDescription = (e) => {
        if(maxCharacterDescription.length < 100){
            setMaxCharacterDescription(maxCharacterDescription = e.target.value)
        }else{
            alert("Atingiu o limite de caracteres para a descrição!")
        }
    }

    const handleMaxCharacterContent = (e) => {
        if(maxCharacterContent.length < 1000){
            setMaxCharacterContent(maxCharacterContent = e.target.value)
        }else{
            alert("Atingiu o limite de caracteres para o contéudo do post!")
        }
    }

    return(
        <Container>
            <div id="title-form-cadastrar-div">
                <h2>{props.purpose} Post</h2>
            </div>
            <form>
                <div id="title-input-div">
                    <input onChange={handleMaxCharacterTitle} value={maxCharacterTitle} placeholder="Title" max="20"/>
                    <span>{maxCharacterTitle.length}/20</span>
                </div>
                <div id="description-textarea-div">
                    <textarea onChange={handleMaxCharacterDescription} placeholder="Description"/>
                    <span>{maxCharacterDescription.length}/100</span>
                </div>
                <div id="content-textarea-div">
                    <textarea onChange={handleMaxCharacterContent} placeholder="Content" disable="true"/>
                    <span>{maxCharacterContent.length}/1000</span>
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
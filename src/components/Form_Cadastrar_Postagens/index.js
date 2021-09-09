import React, { useState } from "react";

import { Container } from "./style";

export const FormCadastrarPostagens = () => {

    let [maxCharacterTitle, setMaxCharacterTitle] = useState("");
    let [maxCharacterDescription, setMaxCharacterDescription] = useState("");
    let [maxCharacterContent, setMaxCharacterContent] = useState("");

    const handleMaxCharacterTitle = (e) => {

        const validationTitle = e.target.value.length <= 20
    
        if(validationTitle){
            setMaxCharacterTitle(maxCharacterTitle = e.target.value)
        }else{
            e.target.value = maxCharacterTitle
        }
    }

    const handleMaxCharacterDescription = (e) => {

        const validationDescription = e.target.value.length <= 100

        if(validationDescription){
            setMaxCharacterDescription(maxCharacterDescription = e.target.value)
        }else{
            e.target.value = maxCharacterDescription
        }
    }

    const handleMaxCharacterContent = (e) => {

        const validationContent = e.target.value.length <= 1000

        if(validationContent){
            setMaxCharacterContent(maxCharacterContent = e.target.value)
        }else{
            e.target.value = maxCharacterContent
        }
    }


    const submitSubscription = () => {
        alert("Ola mundo")
    }

    return(
        <Container>
            <div id="title-form-cadastrar-div">
                <h2>Cadastrar Post</h2>
            </div>
            <form>
                <div id="title-input-div">
                    <input onChange={handleMaxCharacterTitle} placeholder="Title" max="20"/>
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
                    }}>Cadastrar</button>
                </div>
            </form>            
        </Container>
    )
}
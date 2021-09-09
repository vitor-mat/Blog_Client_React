import React, { useState } from "react";

import { api } from "../../services/api";

import { Container } from "./style";

export const FormCadastrarPostagens = () => {

    let [charactersTitle, setCharactersTitle] = useState("");
    let [charactersDescription, setCharactersDescription] = useState("");
    let [charactersContent, setCharactersContent] = useState("");

    const handlecharactersTitle = (e) => {

        const validationTitle = e.target.value.length <= 20
    
        if(validationTitle){
            setCharactersTitle(charactersTitle = e.target.value)
        }else{
            e.target.value = charactersTitle
        }
    }

    const handlecharactersDescription = (e) => {

        const validationDescription = e.target.value.length <= 100

        if(validationDescription){
            setCharactersDescription(charactersDescription = e.target.value)
        }else{
            e.target.value = charactersDescription
        }
    }

    const handlecharactersContent = (e) => {

        const validationContent = e.target.value.length <= 1000

        if(validationContent){
            setCharactersContent(charactersContent = e.target.value)
        }else{
            e.target.value = charactersContent
        }
    }


    const submitSubscription = (e) => {
        e.preventDefault();
        
        api.post("/add", {
            title: charactersTitle,
            description: charactersDescription,
            content: charactersContent
        })
            .then( res => {
                alert(res.data)
                restartSubscription()
            })
            .catch(err => alert("Erro ao cadastrar: "+err))
    }

    const validationSubmition = (e) => {
        e.preventDefault();

        if(charactersTitle.length > 0){
            if(charactersDescription.length > 0){
                if(charactersContent.length > 0){
                    submitSubscription(e)
                }else{
                    alert("Error! Content input is empyt!")
                }
            }else{
                alert("Error! Description input is empyt!")
            }
        }else{
            alert("Error! Title input is empyt!")
        }
    }

    const restartSubscription = () => {
        setCharactersTitle(charactersTitle = "")
        setCharactersDescription(charactersDescription = "")
        setCharactersContent(charactersContent = "")
    }

    return(
        <Container>
            <div id="title-form-cadastrar-div">
                <h2>Cadastrar Post</h2>
            </div>
            <form>
                <div id="title-input-div">
                    <input onChange={handlecharactersTitle} placeholder="Title" max="20"/>
                    <span>{charactersTitle.length}/20</span>
                </div>
                <div id="description-textarea-div">
                    <textarea onChange={handlecharactersDescription} placeholder="Description"/>
                    <span>{charactersDescription.length}/100</span>
                </div>
                <div id="content-textarea-div">
                    <textarea onChange={handlecharactersContent} placeholder="Content" disable="true"/>
                    <span>{charactersContent.length}/1000</span>
                </div>
                <div id="btn-cadastrar-div">
                    <button onClick={e => validationSubmition(e)}>Cadastrar</button>
                </div>
            </form>            
        </Container>
    )
}
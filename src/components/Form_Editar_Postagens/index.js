import React, { useState, useContext } from "react";

import { MyContext } from "../../context/EditPostsContext";

import { Container } from "./style";

export const FormEditarPostagens = () => {

    const { postData, clearPostDatas } = useContext(MyContext)

    let [newCharacterTitle, setNewCharacterTitle] = useState(postData.title);
    let [newCharacterDescription, setNewCharacterDescription] = useState(postData.description);
    let [newCharacterContent, setNewCharacterContent] = useState(postData.content);

    const handleNewCharacterTitle = (e) => {
        if(newCharacterTitle.length < 20){
            setNewCharacterTitle(newCharacterTitle = e.target.value)
        }else{
            alert("Atingiu o limite de caracteres para o titulo!")
        }
    }

    const handleNewCharacterDescription = (e) => {
        if(newCharacterDescription.length < 100){
            setNewCharacterDescription(newCharacterDescription = e.target.value)
        }else{
            alert("Atingiu o limite de caracteres para a descrição!")
        }
    }

    const handleNewCharacterContent = (e) => {
        if(newCharacterContent.length < 1000){
            setNewCharacterContent(newCharacterContent = e.target.value)
        }else{
            alert("Atingiu o limite de caracteres para o contéudo do post!")
        }
    }

    if(postData.id){
        return(
            <Container>
                <div id="title-form-cadastrar-div">
                    <h2>Editar Post</h2>
                </div>
                <form>
                    <div id="title-input-div">
                        <input onChange={handleNewCharacterTitle} value={newCharacterTitle} placeholder="Title" max="20"/>
                        <span>{newCharacterTitle.length}/20</span>
                    </div>
                    <div id="description-textarea-div">
                        <textarea onChange={handleNewCharacterDescription} value={newCharacterDescription} placeholder="Description"/>
                        <span>{newCharacterDescription.length}/100</span>
                    </div>
                    <div id="content-textarea-div">
                        <textarea onChange={handleNewCharacterContent} value={newCharacterContent} placeholder="Content" disable="true"/>
                        <span>{newCharacterContent.length}/1000</span>
                    </div>
                    <div id="btn-cadastrar-div">
                        <button onClick={(e) => {
                            e.preventDefault();
                        }}>Editar</button>
                    </div>
                </form>            
            </Container>
        )
    }else{
        alert("Error: Nenhum Post foi selecionado para editar, volte a page de posts no seu dash board para selecionar um!")
        return(
            <Container>
            <div id="title-form-cadastrar-div">
                <h2>Vá na aba posts e selecione um para poder edita-lo.</h2>
            </div>          
        </Container>
        )
    }
}
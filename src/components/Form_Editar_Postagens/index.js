import React, { useState, useContext } from "react";

import { api } from "../../services/api";

import { MyContext } from "../../context/EditPostsContext";

import { Container } from "./style";

export const FormEditarPostagens = () => {

    const { postData, clearPostDatas } = useContext(MyContext)

    let [newCharacterTitle, setNewCharacterTitle] = useState(postData.title);
    let [newCharacterDescription, setNewCharacterDescription] = useState(postData.description);
    let [newCharacterContent, setNewCharacterContent] = useState(postData.content);

    const handleNewCharacterTitle = (e) => {

        const validationTitle = e.target.value.length <= 50

        if(validationTitle){
            setNewCharacterTitle(newCharacterTitle = e.target.value)
        }else{
            alert("Atingiu o limite de caracteres para o titulo!")
        }
    }

    const handleNewCharacterDescription = (e) => {

        const validationDescription = e.target.value.length <= 100

        if(validationDescription){
            setNewCharacterDescription(newCharacterDescription = e.target.value)
        }else{
            alert("Atingiu o limite de caracteres para a descrição!")
        }
    }

    const handleNewCharacterContent = (e) => {

        const validationContent = e.target.value.length <= 5000

        if(validationContent){
            setNewCharacterContent(newCharacterContent = e.target.value)
        }else{
            alert("Atingiu o limite de caracteres para o contéudo do post!")
        }
    }

    const clearNewCharacters = () => {
        setNewCharacterTitle(newCharacterTitle = "");
        setNewCharacterDescription(newCharacterDescription = "");
        setNewCharacterContent(newCharacterContent = "");
    }

    const submitEdit = (e) => {
        e.preventDefault();

        if(newCharacterTitle.length > 0){
            if(newCharacterDescription.length > 0){
                if(newCharacterContent.length > 0){
                    api.put(`/edit/${postData.id}`,{
                        title: newCharacterTitle,
                        description: newCharacterContent,
                        content: newCharacterContent
                    })
                        .then(async (res) => {
                            alert(res.data)
                            window.location.href = await "http://localhost:3000/dashboard/posts"
                            clearNewCharacters()
                            setTimeout(clearPostDatas, 1000)
                        })
                }else{
                    return alert("Error! Content input is empyt!")
                }
            }else{
                return alert("Error! Description input is empyt!")
            }
        }else{
            return alert("Error! Title input is empyt!")
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
                        <span>{newCharacterTitle.length}/50</span>
                    </div>
                    <div id="description-textarea-div">
                        <textarea onChange={handleNewCharacterDescription} value={newCharacterDescription} placeholder="Description"/>
                        <span>{newCharacterDescription.length}/100</span>
                    </div>
                    <div id="content-textarea-div">
                        <textarea onChange={handleNewCharacterContent} value={newCharacterContent} placeholder="Content" disable="true"/>
                        {/*<span>{newCharacterContent.length}/5000</span> */}
                    </div>
                    <div id="btn-cadastrar-div">
                        <button onClick={submitEdit}>Editar</button>
                    </div>
                </form>            
            </Container>
        )
    }else{
       
    return(
        <Container>
            <div id="title-form-cadastrar-div">
                <h2>Vá na aba posts e selecione um para poder edita-lo.</h2>
            </div>          
        </Container>
    )
    }
}
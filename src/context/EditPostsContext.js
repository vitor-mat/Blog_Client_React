import React, { createContext, useState } from "react";

export const MyContext = createContext({})

export const EditPostsContext = ({ children }) => {
    let [postData, setPost] = useState({
        id: "",
        title: "",
        description: "",
        content: ""
    })

    const getPostDatas = (id, acessos, title, description, content) => {
        setPost({
            id,
            acessos,
            title,
            description,
            content
        })

        console.log(postData)
    }

    const clearPostDatas = () => {
        setPost({
            id: "",
            title: "",
            description: "",
            content: ""
        })
    }

    return(
        <MyContext.Provider value={{postData, getPostDatas, clearPostDatas}}>
            {children}
        </MyContext.Provider>
    )
}
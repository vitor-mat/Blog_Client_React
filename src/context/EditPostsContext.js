import React, { createContext, useState } from "react";

export const MyContext = createContext({})

export const EditPostsContext = ({ children }) => {
    let [postData, setPost] = useState({
        id: "",
        title: "",
        description: "",
        content: ""
    })

    const getPostDatas = (id, title, description, content) => {
        setPost({
            id,
            title,
            description,
            content
        })
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
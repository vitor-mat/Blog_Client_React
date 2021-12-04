import React, { useState, useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { MyContext } from '../../context/EditPostsContext';
import { AccessContext } from "../../context/CounterSiteAccessContext";

import { api } from "../../services/api";

import { Container, Header, Main } from "./style";

import { Card } from "../../components/card/index";

export const Home = () => {

    const { getPostDatas } = useContext(MyContext);

    const { addNewAccess } = useContext(AccessContext);
   
    useEffect(() => {
       addNewAccess()
    },[])

    let [myPosts, setMyPosts] = useState([])

    api.get("/posts")
        .then(res => setMyPosts(myPosts = res.data))
        .catch(err => alert("Error! Erro ao se conectar com o banco de dados: "+err))

    return(
        <Container>
            <Header>
                <Link to="/home"><h1>Blog App</h1></Link>
                <div id="btn-dashboard-div">
                    <button id="btn-dashboard"><Link to="/dashboard">Admin</Link></button>
                </div>
            </Header>
            <Main>
                {myPosts.map(value => {
                    return <Link key={value.id} className="cards-link-container" onClick={() => {
                        getPostDatas(value.id, value.acessos, value.title, value.description, value.content)
                    }}to={`/posts/`}><Card title={value.title} description={value.description} content={value.content} /></Link>
                })}
            </Main>
        </Container>
    )
}
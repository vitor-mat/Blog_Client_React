import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { api } from "../../services/api";

import { Container, Header, Main } from "./style";

import { Card } from "../../components/card/index";

export const Home = () => {

    let [myPosts, setMyPosts] = useState([])

    api.get("/posts")
        .then(res => setMyPosts(myPosts = res.data))
        .catch(err => alert("Error! Erro ao se conectar com o banco de dados: "+err))

    return(
        <Container>
            <Header>
                <Link to="/home"><h1>Blog App</h1></Link>
                <div id="btn-dashboard-div">
                    <button id="btn-dashboard"><Link to="/dashboard">Dashboard</Link></button>
                </div>
            </Header>
            <Main>
                {myPosts.map(value => {
                    return <Card key={value.id} title={value.title} description={value.description} content={value.content} />
                })}
            </Main>
        </Container>
    )
}
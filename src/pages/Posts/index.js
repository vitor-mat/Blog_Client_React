import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, Main } from "./style";

import { Post } from "../../components/post/index";

export const Posts = () => {
    return(
        <Container>
            <Header>
            <Link to="/home"><h1>Blog App</h1></Link>
                <div id="btn-dashboard-div">
                    <button id="btn-dashboard">Dashboard</button>
                </div>
            </Header>
            <Main>
                <Post />
            </Main>
        </Container>
    )
}
import React from 'react';

import { Container, Header, Main } from "./style";

import { Post } from "../../components/post/index";

export const Posts = () => {
    return(
        <Container>
            <Header>
                <h1>Blog App</h1>
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
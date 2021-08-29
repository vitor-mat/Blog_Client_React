import React from 'react';

import { Container, Header, Main } from "./style";

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

            </Main>
        </Container>
    )
}
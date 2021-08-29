import React from 'react';

import { Container, Header, Main, Aside } from "./style";

export const Dashboard = () => {
    return(
        <Container>
            <Header>
                <h1>Blog App <span>dashboard</span></h1>
                <div id="btn-dashboard-div">
                    <button id="btn-dashboard">Get out</button>
                </div>
            </Header>
            <Main>
                <Aside>
                    <nav>
                        <ul>
                            <li>Cadastrar</li>
                            <li>Meus Posts</li>
                            <li>Status</li>
                        </ul>
                    </nav>
                </Aside>
            </Main>
        </Container>
    )
}
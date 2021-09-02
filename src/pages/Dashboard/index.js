import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, Main, Aside } from "./style";

export const Dashboard = ({children}) => {
    return(
        <Container>
            <Header>
                <h1>Blog App <span>dashboard</span></h1>
                <div id="btn-dashboard-div">
                    <button id="btn-dashboard">Get out</button>
                </div>
            </Header>
            <Aside>
                <nav>
                    <ul>
                        <li><Link to="/dashboard/status">Status</Link></li>
                        <li><Link to="/dashboard/cadastrar">Cadastrar</Link></li>
                        <li><Link to="/dashboard/posts">Meus Posts</Link></li>
                    </ul>
                </nav>
            </Aside>
            <Main>
                {children}
            </Main>
        </Container>
    )
}
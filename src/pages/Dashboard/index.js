import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, Main, Aside } from "./style";

export const Dashboard = ({children}) => {
    return(
        <Container>
            <Header>
                <Link to="/dashboard"><h1>Blog App <span>admin</span></h1></Link>
                <div id="btn-dashboard-div">
                    <button id="btn-dashboard"><Link to="/">Get out</Link></button>
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
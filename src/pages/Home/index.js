import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, Main } from "./style";

//import { Card } from "../../components/card/index";

export const Home = () => {
    return(
        <Container>
            <Header>
                <Link to="/home"><h1>Blog App</h1></Link>
                <div id="btn-dashboard-div">
                    <button id="btn-dashboard"><Link to="/dashboard">Dashboard</Link></button>
                </div>
            </Header>
            <Main>

            </Main>
        </Container>
    )
}
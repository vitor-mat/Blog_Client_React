import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
        Container,
        Header,
        Main,
        Aside,
        HanburgerMenu
    } from "./style";

export const Dashboard = ({children}) => {

    let [showAside, setShowAside] = useState("")

    let [burger1Active, setBurger1Active] = useState("")
    let [burger2Active, setBurger2Active] = useState("")
    let [burger3Active, setBurger3Active] = useState("")

    const showMenuMobile = () => {

        if(!showAside){
            setShowAside(showAside = "showAside")

            setBurger1Active(burger1Active = "burger-1-Active")
            setBurger2Active(burger2Active = "burger-2-Active")
            setBurger3Active(burger3Active = "burger-3-Active")

            return;
        }

        setShowAside(showAside = "")
        setBurger1Active(burger1Active = "")
        setBurger2Active(burger2Active = "")
        setBurger3Active(burger3Active = "")

    }

    return(
        <Container>
            <HanburgerMenu
                onClick={() => showMenuMobile()}
            >
                <div className={`burger ${burger1Active}`}></div>
                <div className={`burger ${burger2Active}`}></div>
                <div className={`burger ${burger3Active}`}></div>
            </HanburgerMenu>
            <Header>
                <Link to="/dashboard"><h1>Blog App <span>admin</span></h1></Link>
                <div id="btn-dashboard-div">
                    <button id="btn-dashboard"><Link to="/">Get out</Link></button>
                </div>
            </Header>
            <Aside className={showAside}>
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
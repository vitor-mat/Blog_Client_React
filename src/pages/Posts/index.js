import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { MyContext } from '../../context/EditPostsContext';

import { api } from "../../services/api";

import { Container, Header, Main } from "./style";

import { Post } from "../../components/post/index";

export const Posts = () => {

    const { postData } = useContext(MyContext)

    return(
        <Container>
            <Header>
            <Link to="/home"><h1>Blog App</h1></Link>
                <div id="btn-dashboard-div">
                    <button id="btn-dashboard"><Link to="/dashboard">Dashboard</Link></button>
                </div>
            </Header>
            <Main>
                <Post title={postData.title} description={postData.description} content={postData.content}/>
            </Main>
        </Container>
    )
}
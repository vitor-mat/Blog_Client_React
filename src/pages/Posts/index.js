import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { MyContext } from '../../context/EditPostsContext';
import { AccessContext } from '../../context/CounterSiteAccessContext';

import { Container, Header, Main } from "./style";

import { Post } from "../../components/post/index";

export const Posts = () => {

    const { postData } = useContext(MyContext)

    const { addNewAccess, addPostAccess } = useContext(AccessContext);
   
    useEffect(() => {
        addNewAccess();
        addPostAccess(postData.id, postData.acessos)
    },[])

        return(
            <Container>
                <Header>
                <Link to="/home"><h1>Blog App</h1></Link>
                    <div id="btn-dashboard-div">
                        <button id="btn-dashboard"><Link to="/dashboard">Admin</Link></button>
                    </div>
                </Header>
                <Main>
                    <Post title={postData.title} description={postData.description} content={postData.content}/>
                </Main>
            </Container>
        )
}
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    padding:15px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    word-wrap: break-word;

    text-align: center;

    h1{
        font-size: 48px;
        font-weight: 700;
    }

    h3{
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 50px;
    }

    p{
        font-size: 18px;
        font-weight: 300;
        text-align: justify;
    }
`
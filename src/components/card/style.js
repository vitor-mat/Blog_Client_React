import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 180px;

    padding:15px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    border-bottom: 1px solid black;

    h1{
        font-size: 48px;
        font-weight: 700;
    }

    h3{
        font-size: 24px;
        font-weight: 500;
    }

    p{
        word-wrap: break-word;
        font-size: 18px;
        font-weight: 300;
    }
`
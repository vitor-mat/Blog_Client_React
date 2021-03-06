import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 260px;

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

    #btn-divs{
        width: 100%;
        height: 60px;

        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
        gap: 15px;
        align-items: center;
    }
`
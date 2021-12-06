import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    padding-top: 70px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    h2{
        font-size: 64px;
        font-weight: 400;
    }

    div{
        width: 100%;
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        span{
            font-size: 24px;
        }
    }

`
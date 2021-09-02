import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    padding: 10px 0;

    display: flex;
    justify-content: center;
    gap: 30px;

    table{
        height: 300px;

        caption{
            width: 100%;
            height: 50px;

            border: 1px solid black;

            text-align: center;
            line-height: 50px;
        }

        tr > th {
            width: 50%;
            height: 33.33%;

            padding: 10px;
        }
    }

    table, div{
        width: 400px;

        text-align: center;

        border: 1px solid black;
    }

    div{
        dislay: inline-block;
        height: 350px;
    }
`
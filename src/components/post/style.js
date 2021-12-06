import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 85vh;

    padding:15px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    word-wrap: break-word;

    margin: 0 auto;


    h1{
        font-size: 64px;
        font-weight: 700;

        margin-bottom: 10px;
        margin-left: 50px; 
    }

    h3{
        font-size: 24px;
        margin-bottom: 50px;
        margin-left: 50px; 
    }

    p{
        font-size: 22px;
        font-weight: 300;

        text-align: justify;
    }

    @media(max-width: 500px){
        h1{
            font-size: 56px;
            margin-left: 30px; 
        }

        h3{
            margin-left: 30px; 
        }
    }

    @media(max-width: 430px){
        h1{
            font-size: 48px;
        }
    }

    @media(max-width: 380px){
        h1{
            font-size: 40px;
        }
    }

    @media(max-width: 340px){
        h1{
            font-size: 32px;
        }

        h3{
            font-size: 20px;
        }

        p{
            font-size: 16px;
        }
    }
`
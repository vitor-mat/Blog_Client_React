import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    overflow-y: auto;
`

export const Header = styled.header`
    width: 100%;
    height: 10vh;

    background: black;

    display: flex;
    align-items: center;
    padding-left: 20px;

    position: relative;

    h1{
        color: #fff;
        font-weight: bolder;

        cursor: pointer;

        span{
            font-size: 16px;
        }
    }

    #btn-dashboard-div{
        height: 100%;

        display: flex;
        align-items: center;

        position: absolute;

        right: 20px;

        #btn-dashboard{
            background: #fff;
            border: none;
            width: 150px;
            height; 60px;
            padding: 5px;
            font-weight: 600;
            font-size: 18px;
            border-radius: 10px;
            cursor: pointer;
        }

        #btn-dashboard:active{
            background: lightblue;
        }
    }
`

export const Main = styled.main`
    width: 100%;
    height: 90vh;

    display: flex;
    gap: 10px;

    overflow-y: auto;
`

export const Aside = styled.aside`
    min-width: 180px;
    height: 100%;

    background: rgba(0, 0, 0, 0.1);

    padding-top: 70px;

    ul{

        width: 100%;

        display: flex;
        flex-direction: column;

        li{
            display: flex;
            align-items: center;

            height: 50px;

            padding-left: 20px;

            font-weight: 700;
            font-size: 25px;
            cursor: pointer;
        }

        li:hover{
            background: rgba(0, 0, 0, .5);
            color: #fff;
        }

        li:active{
            color: lightblue;
        }
    }
`
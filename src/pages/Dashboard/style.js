import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    overflow-y: auto;

    display: grid;
    grid-template-areas:"header header"
                        "aside main";
    grid-template-columns: 180px  auto;
    grid-template-rows: 10vh  90vh; 
`

export const Header = styled.header`
    width: 100%;
    height: 100%;

    grid-area: header;

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
    height: 100%;

    grid-area: main;

    display: flex;
    gap: 10px;

    overflow-y: auto;
`

export const Aside = styled.aside`
    width: 100%;
    height: 100%;

    grid-area: aside;

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

            cursor: pointer;

            a{
                font-weight: 700;
                font-size: 25px;
                text-decoration: none;
                color: black;
            }
        }

        li:hover{
            background: rgba(0, 0, 0, .5);

            a{
                color: #fff;
            }
        }

        li:active{
            a{
                color: lightblue;
            }
        }
    }
`
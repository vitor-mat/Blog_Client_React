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

    @media(max-width:550px){
        grid-template-areas:"header header"
                            "main main";
        grid-template-columns: 100%;
        grid-template-rows: 10vh  90vh;

         .showAside{
            transform: translatex(0px);
            z-index: 500;
            opacity: 1;
            background: white;
        }
    } 
`

export const HanburgerMenu = styled.div`
    display: none;

    @media(max-width: 550px){
        display: flex;
        flex-direction: column;
        gap: 7px;
        width: 80px;
        height: 60px;
        position: absolute;
        top: 100px;
        left: 40px;
        z-index: 1000;
        padding: 10px;

        .burger{
            width: 100%;
            min-height: 8px;
            background: black;
            border-radius: 10px;
            opacity: .7;
            transition: .4s linear;
        }

        .burger-1-Active{
            transform: rotatez(45deg) translatey(20px);
        }

        .burger-2-Active{
            transform: translatey(-10px);
            opacity: 0;
        }

        .burger-3-Active{
            transform: rotatez(-45deg) translatey(-20px);
        }
    }
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

    a{
        text-decoration: none;

        h1{
            color: #fff;
            font-weight: bolder;
    
            cursor: pointer;
    
            span{
                font-size: 16px;
            }
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

            border-radius: 10px;
            cursor: pointer;

            a{
                color: black;
                text-decoration: none;
                font-weight: 600;
                font-size: 18px;
            }
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

    padding-top: 90px;

    transition: .4s linear;

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

    @media(max-width: 550px){
        width: 180px;
        grid-area: none;
        position: absolute;
        top: 80px;
        transform: translatex(-180px);
    }
`
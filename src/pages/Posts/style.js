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

    a{
        color: #fff;
        text-decoration: none;

        h1{
            font-weight: bolder;
    
            cursor: pointer;
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
    min-height: 85vh;

    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 10px 10px 20px;

    overflow-y: auto;
`
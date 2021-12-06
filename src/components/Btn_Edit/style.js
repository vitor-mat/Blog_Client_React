import styled from 'styled-components';

export const Button = styled.button`
    min-width: 100px;
    height: 40px;

    background: rgba(0, 0, 255, 0.7);
    color: #fff;

    border: none;
    border-radius: 10px;

    cursor: pointer;

    &:active{
        color: lightblue;
    }
`
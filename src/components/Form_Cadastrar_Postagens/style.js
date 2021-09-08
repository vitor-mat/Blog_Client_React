import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    padding-top: 30px;

    #title-form-cadastrar-div{
        width: 100%;

        text-align: center;

        h2{
            font-size: 64px;
            font-weight: 400;
        }
    }

    form{
        width: 90%;
        height: 600px;

        display: flex;
        flex-direction: column;
        gap: 20px;


        #title-input-div{
            width: 100%;

            position: relative;

            input{
                width: 100%;
                height: 50px;
    
                padding: 5px;
    
                font-size: 24px;
                font-weight: 300;

                border-radius: 10px;
                border: 1px solid rgba(0, 0, 0, .5);
            }

            input:focus{
                border: 3px solid lightblue;
                outline: lightblue;
            }

            span{
                position: absolute;

                right: 30px;
                bottom: 4px;

                font-weight: 300;
            }
        }

        #description-textarea-div{
            width: 100%;

            position: relative;

            textarea{
                width: 100%;
                height: 70px;
    
                padding: 5px;
    
                font-size: 24px;
                font-weight: 300;

                resize: none;

                border-radius: 10px;
                border: 1px solid rgba(0, 0, 0, .5);

            }

            textarea:focus{
                border: 3px solid lightblue;
                outline: lightblue;
            }

            span{
                position: absolute;

                right: 30px;
                bottom: 8px;

                font-weight: 300;
            }
        }

        #content-textarea-div{
            width: 100%;

            position: relative;

            textarea{
                width: 100%;
                height: 300px;
    
                padding: 5px;
                padding-bottom: 24px;
    
                font-size: 24px;
                font-weight: 300;
    
                resize: none;

                border-radius: 10px;
                border: 1px solid rgba(0, 0, 0, .5);

                overflow-y: auto;
            }
    
            textarea:focus{
                border: 3px solid lightblue;
                outline: lightblue;
            }

            span{
                position: absolute;

                right: 30px;
                bottom: 8px;

                font-weight: 300;
            }
        }

        #btn-cadastrar-div{

            width: 100%;

            display: flex;
            justify-content: flex-end;

            padding-right: 20px;

            button{
                width: 100px;
                height: 50px;
    
                background: black;
                color: #fff;
    
                border: none;
                border-radius: 10px;
    
                cursor: pointer;

                font-size: 18px;
            }
    
            button:active{
                color: lightblue;
            }
        }
    }
`
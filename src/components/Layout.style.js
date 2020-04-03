import styled, { keyframes } from 'styled-components';
import { flipInY,flash } from 'react-animations';

const flipInYAnimation = keyframes`${flipInY}`;
const flashAnimation = keyframes`${flash}`;

export const StyledDiv = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    padding: 15px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 450px;
    border: 2px solid #d5d5d5;
    border-radius: 5px;
    .topic {
        font-size: 45px;
        padding: 20px 0 30px;
    }
    &:hover .topic {
        animation: 3s ${flipInYAnimation};
    }
    .todos {
        margin: 20px 0 5px;
        width: 100%;
        border: 2px solid palevioletred; 
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        &.done {
            background: #c3ffeb;
        }
        .todos-top {
            width: 100%;
            border-bottom: 1px solid #d5d5d5;
            display: flex;
            justify-content:space-between;

            .label-box {
                padding: 5px;
                font-size: 20px;
            }
            .buttons {
                padding: 5px;
                & > span {
                    font-size: 18px;
                    padding: 0 3px;
                }
            }
        }
        .todos-bottom {
            width: 100%;
            
            .todo-box {
                color: grey;
                text-align: left;
                padding: 5px;
            }
            .date-comm {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .datebox {
                    padding: 5px 10px 5px 5px;
                    color: grey;
                    font-size: 13px;
                    border-radius: 3px;
                    &.bg-relax {
                        background: lightgreen;
                    }
                    &.bg-warn {
                        background: yellow;
                    }
                    &.bg-past {
                        background: #ffb6b6;;
                    }    
                }
                .comments {
                    span {
                        font-size: 18px;
                        padding-left: 10px;
                    }  
                }
            }
        }
    }
    @media only screen and (max-width: 414px) {
        border-radius: 3px;
        .topic {
            font-size: 30px;
            padding: 15px 0 20px;
        }
       
        .todos {
            margin: 10px 0 5px;
            border: 1px solid palevioletred; 
            border-radius: 3px;
            .todos-top {
                .label-box {
                    font-size: 13px;
                }
                .buttons {
                    & > span {
                        font-size: 13px; 
                    }
                }
            }
            .todos-bottom {                
                .todo-box {
                    color: grey;
                    text-align: left;
                    padding: 5px;
                    font-size: 13px;
                }
                .date-comm {
                    .datebox {
                        padding: 3px 6px 3px 3px;
                        font-size: 11px;
                    }
                    .comments {
                        span {
                            font-size: 13px;
                            padding-left: 10px;
                        }  
                    }
                }
            }
        }
    }
`;

export const Button = styled.button`
    animation: 5s ${flashAnimation};
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1.2rem;
    padding: 0.5rem;
    font-weight: bold;
    border: 2px solid palevioletred;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;

    &:focus {
        outline: none;
    }
    &:hover {
        background: ${props => props.primary ? "white" : "palevioletred"};
        color: ${props => props.primary ? "palevioletred" : "white"};
        cursor: pointer;
    }
    @media only screen and (max-width: 414px) {
        font-size: 0.9rem;
        padding: 0.4rem;
        border-radius: 3px;
    }
`;

export const Form = styled.form`
    margin: 50px;
    *:focus {
        outline: none;
    }
    & > label {
        display: block;
        font-size: 18px;
        font-weight: bold;
        margin-top: 5px;
    }
    & > input {
        width: 400px;
        height: 35px;
        border-radius: 5px;
        margin: 5px;
        font-size: 15px; 
        color: grey;   
    }
    fieldset {
       
        color: grey;
        font-size: 15px;
        & > input {
            display: block;
            margin: 0 10px;
        }
    }
    textarea {
        width: 400px;
        min-height: 70px;
        border-radius: 5px;
        color: grey;
    }
    @media only screen and (max-width: 414px) {
        margin: 50px 10px 10px;
        & > label {
            font-size: 12px;
        }
        & > input {
            width: 100%;
            height: 20px;
            border-radius: 3px;
            font-size: 11px; 
            padding: 3px;
        }
        fieldset {
            font-size: 12px;
            & > input {
            display: block;
            }
        }
        textarea {
            width: 100%;
            border-radius: 3px;
            font-size: 11px;
        }
    }
`;
import styled from "styled-components";

export const Header = styled.h2`
    font-size: 2.3em;
    text-align: center;
    color: #41506b;
    margin-bottom: 15px;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #35bcbf; 
    padding: 5px
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #90f6d7;
    padding: 25px;
    border-radius: 20px;
    box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 500px;
`;

export const Label = styled.label`
    font-size: 1.4em;
    color: #41506b;
    margin: 5px 0px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin: 5px;
    border: 2px solid #35bcbf;
    border-radius: 30px;
    font-size: 1.1em;
`;

export const Button = styled.button`
    width: 20%;
    padding: 10px;
    margin: 10px 0;
    background-color: #41506b;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: #263849;
    }
`;

export const Points = styled.div`
    background-color: #35bcbf;
    padding: 8px;
    margin-top: 10px;
    border-radius: 20px;
    width: 80%;
    max-width: 500px;
    text-align: center;
    font-size: 1.3em;
    color: white;
`;

export const Error = styled.div`
    background-color: #ef5350;
    padding: 8px;
    margin-top: 5px;
    border-radius: 20px;
    width: 70%;
    max-width: 500px;
    text-align: center;
    font-size: 1.3em;
    color: white;
`;

export const GameRules = styled.div`
    margin-top: 10px;
    padding: 15px;
    background-color: #90f6d7;
    border-radius: 20px;
    box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.2);

    h2 {
        margin-bottom: 10px;
        text-align: center;
        font-size: 1.5em;
        color: #41506b;
    }

    ol {
        padding: 10px;
        margin-left: 25px
    }

    li {
        margin-bottom: 5px;
        font-size: 1em;
        color: #41506b;
    }
`;

import React, { useState } from "react";
import WordGameService from "../service/WordGameService";
import { 
    Header,
    MainContainer,
    Form,
    Label,
    Input,
    Button,
    Points,
    Error,
    GameRules,
} from "../styles/global";

function WordGameApp() {
    const [word, setWord] = useState('');
    const [score, setScore] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await WordGameService.submitWord(word);

        if(data.success){
            setScore(data.score);
            setError(null);
        }else{
            setError(data.message);
        }
    }
    
    return(
        <MainContainer>
            <Header>Word Game</Header>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="word">Enter a word</Label>
                <Input
                    id="word"
                    name="word"
                    type="text"
                    required
                    placeholder="Enter a word"
                    value={word}
                    onChange={({ target }) => setWord(target.value)}
                />
                <Button>Submit</Button>
                {score !== null && error === null && 
                    <Points>
                        This word is worth {score} points
                    </Points>
                }
                {error && <Error>{error}</Error>}
            </Form>
            <GameRules>
                <h2>Game Rules</h2>
                <ol>
                    <li>One Point For Each Unique Letter</li>
                    <li>Two Points For Almost Palindrome Word</li>
                    <li>Three Points For A Palindrome Word</li>
                </ol>
            </GameRules>
        </MainContainer>
    );
}


export default WordGameApp;

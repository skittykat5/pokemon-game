import React from 'react';
import {useState, useEffect} from 'react';
import {
    Row,
    Button
} from 'react-bootstrap'
import Cry from "./Cry";
import Ball from "./Ball";
import ScoreCard from './ScoreCard';
import PokeCard from './PokeCard';
import axios from 'axios';
import formatName from './FormatName';

function Game() {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [justWon, setJustWon] = useState(false);
    const [winningChoice, setWinningChoice] = useState(0);
    const [winner, setWinner] = useState([]);
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    
    async function generateRandomPokemon() {
        const idArray = [];
        const pokeArray = [];
        const winnerArray = [false, false, false];
        var winningNumber = Math.floor(Math.random() * 3);
        setWinningChoice(winningNumber);
        winnerArray[winningNumber] = true;
        setWinner(winnerArray);
        var id = -1;
        for (let i = 0; i < 3; i++) {
            do {
                id = Math.floor(Math.random() * 1025) + 1;
            } while (idArray.indexOf(id) >= 0);
            idArray.push(id);
            var response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).catch((error) => console.log(error));
            pokeArray.push(response.data);
        }
        setPokemon(pokeArray);
    }

    function handleChoiceClick(isWinner) {
        if (isPlaying) {
            if (isWinner) {
                setJustWon(true);
                setWins(wins+1);
                console.log("correct");
            } else {
                setJustWon(false);
                setLosses(losses+1);
                console.log("incorrect");
            }
            setIsPlaying(false);
        }
    }

    function handleReplay() {
        setIsLoading(true);
        setIsPlaying(true);
    }

    useEffect(() => {
        if(isPlaying) {
            generateRandomPokemon();
        }
    }, [isPlaying])

    useEffect(() => {
        if(isLoading && (pokemon.length > 0)) {
            console.log(pokemon);
            console.log(winner);
            setIsLoading(false);  
        }
    }, [pokemon])

    return (
        <div id="pokemon-game">
            <div id="pokemon-game-title">
                <img id="second-logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"/>
                <h1>Guess That Cry!</h1>
            </div>
            {isLoading ? (
                <Ball/>
            ) : (
                <div class="gameScreen">
                    <Cry soundUrl={pokemon[winningChoice].cries.latest}/>
                    <p/>
                    <div class="card-container">
                        <PokeCard name={formatName(pokemon[0].name)} imageSrc={pokemon[0].sprites.front_default} isWinner={winner[0]} cardButtonCallback={handleChoiceClick}/>
                        <PokeCard name={formatName(pokemon[1].name)} imageSrc={pokemon[1].sprites.front_default} isWinner={winner[1]} cardButtonCallback={handleChoiceClick}/>
                        <PokeCard name={formatName(pokemon[2].name)} imageSrc={pokemon[2].sprites.front_default} isWinner={winner[2]} cardButtonCallback={handleChoiceClick}/>
                    </div>
                    {isPlaying ? (
                        <br/>
                    ) : (
                        <div class="replay-message">
                            <p/>
                            {justWon ? (
                                <h2>Correct! You won!</h2>
                            ) : (
                                <h2>Incorrect! The correct answer was: {formatName(pokemon[winningChoice].name)}</h2>
                            )}
                            <button id="replay-button" class="button" onClick={handleReplay} variant="primary">Play Again</button>
                        </div>
                    )}
                    <ScoreCard wins={wins} losses={losses}/>
                </div>
            )}
        </div>
    );
}

export default Game;
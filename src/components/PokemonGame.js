import React from 'react';
import {useState} from 'react';
import Game from './Game';
import '../style/PokemonGame.css'


function PokemonGame () {

    const [justStarted, setJustStarted] = useState(true);

    function startGame() {
        setJustStarted(false);
    }

    return (
        <div class="game"> 
            {justStarted ? (
                <div class="titleScreen-container"> <div id="titlescreen">
                    <img id="primary-logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"/>
                    <h1>Guess That Cry!</h1>
                    <button class="button" onClick={startGame} variant="primary">Play Game</button>
                </div> </div>
            ) : (
                <Game/>
            )}
        </div>
    )
}
export default PokemonGame;
function PokeCard({name, imageSrc, isWinner, cardButtonCallback}) {

    return (
        <div class="pokemon-card">
            <img class="spriteImage" src={imageSrc}/>
            <button class="button" onClick={() => cardButtonCallback(isWinner)}>
                {name}
            </button>
        </div>
    );
}

export default PokeCard;

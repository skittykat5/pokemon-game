import {useState} from 'react';
function PokeCard({name, imageSrc, isWinner, cardButtonCallback}) {

    const [isSelected, setIsSelected] = useState(false);

    function handleSelect() {
        setIsSelected(true);
        cardButtonCallback(isWinner);
    }

    return (
        <div class="pokemon-card">
            <img class="spriteImage" src={imageSrc}/>
            <button class={isSelected ? 'button selected' : 'button'} onClick={handleSelect}>
                {name}
            </button>
        </div>
    );
}

export default PokeCard;

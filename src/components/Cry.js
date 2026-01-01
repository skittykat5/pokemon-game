import {useRef} from 'react';
import { useWavesurfer } from '@wavesurfer/react';
import '../style/PokemonGame.css'

function Cry({soundUrl}) {

    const containerRef = useRef(null);

    const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
        container: containerRef,
        height: 100,
        waveColor: 'rgb(255, 234, 40)',
        progressColor: 'rgb(253, 174, 28)',
        url: soundUrl,
        barWidth: 2,
        barGap: 1,
        barRadius: 2
    });

    const onPlay = () => {
        wavesurfer && wavesurfer.play() && wavesurfer.setVolume(0.15);
    }

    return (
        <div class="player-container">
            <button id="play-button" onClick={onPlay}> {isPlaying ? '\u23F8' : '\u23F5'}</button>
            <div ref={containerRef} id="waveform"/>
        </div>
    );
}

export default Cry;
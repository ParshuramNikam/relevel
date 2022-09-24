import React from 'react'
import { Pause, Play } from 'react-bootstrap-icons'

const MusicCard = ({ image, audio, setAudio, title, artist, genre, stream_url }) => {
    const [play, setPlay] = React.useState(true);

    const start = () => {
        audio.play()
    }

    return (
        <div class="music-card">
            <div class="music-card-img">
                <img src={image} width={200} height={200} />
            </div>
            <div class="music-card-info">
                <h3 class="music-card-title">{title}</h3>
                <p class="music-card-artist">{artist}</p>
                <p class="music-card-genre">{genre}</p>
            </div>
            <div>
                {
                    play ? <button size='3x' class="music-card-btn" onClick={() => { setAudio(new Audio(stream_url)); setPlay(false) }}>
                        <Play />
                    </button>
                        :
                        <button class="music-card-btn" onClick={() => setPlay(true)}>
                            <Pause />
                        </button>
                }
            </div>
        </div>
    )
}

export default MusicCard
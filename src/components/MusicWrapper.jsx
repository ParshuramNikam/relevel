import React from 'react'
import MusicCard from './MusicCard';

const data = require('../playlist.json');

const imageData = [
    "/images/artworks-000108082888-373k86-t500x500.jpg",
    "/images/artworks-000195798628-2z475v-t500x500.jpg",
    "/images/artworks-000158892019-gl0357-t500x500.jpg",
    "/images/artworks-000175557273-9bo2s9-t500x500.jpg",
    "/images/artworks-000182755511-wz2o9f-t500x500.jpg",
    "/images/artworks-000184046522-ut8qu4-t500x500.jpg",
    "/images/artworks-000186848616-wrijmy-t500x500.jpg",
    "/images/artworks-000188203149-muyu94-t500x500.jpg",
    "/images/artworks-000192444803-5uo9pr-t500x500.jpg",
    "/images/artworks-000195798628-2z475v-t500x500.jpg",
    "/images/artworks-000196336922-omp2b9-t500x500.jpg",
    "/images/artworks-000247567530-ysnxiq-t500x500.jpg",
]

const MusicWrapper = () => {
    const [audio, setAudio] = React.useState();


    return (
        <div className='music-wrapper'>
            {
                data.map((item, index) => {
                    return (
                        <MusicCard
                            key={index}
                            image={imageData[index]}
                            title={item.title}
                            artist={item.artist}
                            genre={item.genre}
                            audio={audio}
                            stream_url={item.stream_url}
                            setAudio={setAudio} />
                    )
                })
            }
        </div>
    )
}

export default MusicWrapper
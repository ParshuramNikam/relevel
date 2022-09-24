import React from 'react'
import MusicCard from './MusicCard';
import SearchMusic from './SearchMusic';

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
    const [musicdata, setMusicData] = React.useState(data);

    const [musicFilter, setMusicFilter] = React.useState();
    const [filterValue, setFilterValue] = React.useState();

    const onFilterApply = () => {
        if (musicFilter === "genre") {
            if (filterValue === "all") {
                setMusicData(data);
            }
            else {
                setMusicData(data.filter((item) => item.genre === filterValue));
            }
        }
        else if (musicFilter === "relese_year") {
            if (filterValue === "all") {
                setMusicData(data);
            }
            else {
                if (filterValue === "2016") {
                    setMusicData([data[1], data[2], data[4], data[5], data[8]]);
                } else if (filterValue === "2017") {
                    setMusicData([data[3]]);
                } else {
                    setMusicData(data);
                }
            }
        } else if (musicFilter === "username") {
            setMusicData(data.filter((item) => item.genre.includes(filterValue)));
        } else if (musicFilter === "title") {
            setMusicData(data.filter((item) => item.genre.includes(filterValue)));
        }

    }

    return (
        <div className="music-container">
            <SearchMusic onFilterApply={onFilterApply} filterValue={filterValue} setFilterValue={setFilterValue} musicFilter={musicFilter} setMusicFilter={setMusicFilter} />

            <div className='music-wrapper'>
                {
                    musicdata.map((item, index) => {
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
        </div>
    )
}

export default MusicWrapper
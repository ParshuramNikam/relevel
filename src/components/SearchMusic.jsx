import React from 'react'
import { Search } from 'react-bootstrap-icons'

const SearchMusic = ({ filterValue, setFilterValue, musicFilter, setMusicFilter, onFilterApply }) => {
    return (
        <div className='search-music'>
            <select onChange={(e) => {
                setFilterValue(e.target.value)
                setMusicFilter(e.target.value)
            }}>
                <option value="none" disabled={musicFilter ? true : false}>-- Choose Filter Type --</option>
                <option value="genre">Genre</option>
                <option value="relese_year">Relese Year</option>
                <option value="username">Username</option>
                <option value="title">Title</option>
            </select>
            {
                musicFilter === "genre" && <select value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Just">Just</option>
                    <option value="BRUK">BRUK</option>
                    <option value="Ambient">Ambient</option>
                    <option value="Techno">Techno</option>
                </select>
            }
            {
                musicFilter === "relese_year" && <select value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="all">all</option>
                </select>
            }
            {
                musicFilter === "username" && <input type="text"
                    value={filterValue} onChange={(e) => setFilterValue(e.target.value)}
                />
            }
            {
                musicFilter === "title" && <input type="text"
                    value={filterValue} onChange={(e) => setFilterValue(e.target.value)}
                />
            }
            <button onClick={onFilterApply}>
                <Search />    Search
            </button>
        </div>
    )
}

export default SearchMusic
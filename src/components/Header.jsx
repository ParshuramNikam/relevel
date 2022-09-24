import React from 'react'

const Header = () => {
    return (
        <header class="main-header">
            <a href="#" class="brand-logo">
                <img src="/images/artworks-000195798628-2z475v-t500x500.jpg" width={35} height={35} />
                <h1 class="brand-logo-name">Soundwave</h1>
            </a>
            <nav class="main-nav">
                <ul>
                    <li><a href="#discover">Discover</a></li>
                    <li><a href="#join">Join</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
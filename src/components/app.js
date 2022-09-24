import React from "react";
import '../styles/app.css';
import Discover from "./Discover";
import Header from "./Header.jsx";
import Hero from "./Hero";
import MusicWrapper from "./MusicWrapper";

function App() {
  return (
    <div class="container full-height-grow">
      <Header />
      <Hero />
      <MusicWrapper />
    </div>
  );
}

export default App;
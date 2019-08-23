import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    // .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results)
    })
  }, []);

  return (
    <section className="character-list grid-view">
        {characters.map(char => {
          return <CharacterCard key={char.id} {...char} />;
        })}
    </section>
  );
}
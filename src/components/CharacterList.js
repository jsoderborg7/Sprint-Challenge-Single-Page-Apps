import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList= (props) => {
  const [characters, setCharacters] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    // .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const characters = response.data;
      setCharacters(characters);
    });
  }, []);

  return (
    <section className="character-list grid-view">
        {characters.map(char => {
          return(
            <CharacterCard
              key={char.id}
              id={char.id}
              name={char.name}
              species={char.species}
              origin={char.origin}
              location={char.location}
              image={char.image}
            />
          )
        })}
    </section>
  );
}
export default CharacterList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import styled from "styled-components";

const EpisodeList= (props) => {
  const [episodes, setEpisodes] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    // .get(`https://rickandmortyapi.com/api/episode/`)
    .then(response => {
      setEpisodes(response.data);
    });
  }, []);

  return (
    <section className="episode-list grid-view">
      <h2>
        TODO: `array.map()` over your state here!
        {episodes.map(episode => {
          return(
            <EpisodeCard
              key={episode.id}
              id={episode.id}
              air_date={episode.air_date}
              episode={episode.episode}
              characters={[episode.characters]}
            />
          )
        })}
      </h2>
    </section>
  );
}
export default EpisodeList;
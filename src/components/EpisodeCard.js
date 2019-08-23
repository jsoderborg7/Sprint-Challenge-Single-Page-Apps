import React from "react";


const EpisodeCard = props => {
  return (
    <div className="episodeCard">
      <h2>{props.name}</h2>
      <p>{props.air_date}</p>
      <p>{props.episode}</p>
      <p>{props.characters}</p>
    </div>
  )
}
export default EpisodeCard;
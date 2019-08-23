import React from "react";


const CharacterCard = props => {
  return (
    <div className="characterCard">
      <img src={props.image}/>
      <h2>{props.name}</h2>
      <p>{props.species}</p>
      <p>{props.origin}</p>
      <p>{props.location}</p>
    </div>
  )
}
export default CharacterCard;

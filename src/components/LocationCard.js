import React from "react";


const LocationCard = props => {
  return (
    <div className="locationCard">
      <h2>{props.name}</h2>
      <p>{props.type}</p>
      <p>{props.dimension}</p>
      <p>{props.residents}</p>
    </div>
  )
}
export default LocationCard;

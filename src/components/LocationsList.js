import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import styled from "styled-components";

const LocationList= (props) => {
  const [locations, setLocations] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    // .get(`https://rickandmortyapi.com/api/location/`)
    .then(response => {
      setLocations(response.data)
    });
  }, []);

  return (
    <section className="location-list grid-view">
      <h2>
        TODO: `array.map()` over your state here!
        {locations.map(location => {
          return(
            <LocationCard
              key={location.id}
              id={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents={[location.residents]}
            />
          )
        })}
      </h2>
    </section>
  );
}
export default LocationList;
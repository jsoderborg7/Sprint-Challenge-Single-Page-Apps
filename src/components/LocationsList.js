import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
    // .get('https://rickandmortyapi.com/api/location/')
    .then(response => {
      setLocations(response.data.results)
    })
  }, []);

  return (
    <section className="location-list grid-view">
        {locations.map(location => {
          return <LocationCard key={location.id} {...location} />;
        })}
    </section>
  );
}
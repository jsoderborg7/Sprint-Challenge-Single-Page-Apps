import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";


export default function CharacterCard ({name, image, location, origin, species, status}) {
  return (
    <Card
      header={name}
      image={image}
      description={`Can be found at ${location.name}`}
      meta={species}
      extra= {`Originally from ${origin.name}`}
    />
  )
}

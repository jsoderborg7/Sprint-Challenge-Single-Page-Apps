import React from 'react'
import {Card} from "semantic-ui-react";

 export default function EpisodeCard ({ id, name, air_date, episode }) {

   return (
    <Card
      header={name}
      description={episode}
      extra={air_date}
    />
  )
}
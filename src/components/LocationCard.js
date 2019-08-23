import React from "react";
import {Card} from "semantic-ui-react";


export default function LocationCard ({name, type, dimension}){
  return(
    <Card
      header={name}
      description={type}
      extra={dimension}
    />
  )
}

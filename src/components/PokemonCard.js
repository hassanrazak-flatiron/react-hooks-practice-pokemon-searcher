import React from "react";
import { Card } from "semantic-ui-react";
import {useState} from 'react'

function PokemonCard({pokey}) {
  const{name, hp, sprites} = pokey

  const[frontBack, setFrontBack] = useState(true)

  function handleFrontBack(){
    setFrontBack(!frontBack)
  }



  return (
    <Card>
      <div>
        <div className="image">
          <img 
          onClick = {handleFrontBack}
           alt="oh no!" 
           src = {frontBack ? sprites.front : sprites.back}
           
           />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

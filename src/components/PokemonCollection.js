import React from "react";
import { Card } from "semantic-ui-react";


function PokemonCollection({pokeys}) {

  



  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokeys}
      
    </Card.Group>
  );
}

export default PokemonCollection;

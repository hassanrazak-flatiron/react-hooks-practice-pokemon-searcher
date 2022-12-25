import React from "react";
import { Form } from "semantic-ui-react";
import {useState} from 'react'

function PokemonForm() {

  const[name,setName] = useState('')
  const[hp,setHp] = useState('')
  const[frontUrl,setFrontUrl] = useState('')
  const[backUrl,setBackUrl] = useState('')

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          const postPokemon = async () =>{
            let req = await fetch('http://localhost:3000/pokemon',{
              method: 'POST',
              headers:{
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name:name,
                hp:hp,
                sprites:{
                  front: frontUrl,
                  back: backUrl
                }

              })
            })
            let res = await req.json()
            console.log('Success :',res)
            

          }
          postPokemon()

        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Name" 
          placeholder="Name" 
          name="name"
          value={name}
          onChange = {(e) => setName(e.target.value)}
           />
          <Form.Input 
          fluid label="hp" 
          placeholder="hp" 
          name="hp"
          value={hp}
          onChange = {(e) => setHp(e.target.value)}
           />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange = {(e) => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange = {(e) => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

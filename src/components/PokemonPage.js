import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import {useState, useEffect} from 'react'
import PokemonCard from "./PokemonCard";

function PokemonPage() {

  const [pokemons,setPokemons] = useState([])
const[searchPokeys,setSearchPokeys] = useState('')

const filteredPokeys = pokemons.filter((pokey) =>{
  return(
    pokey.name.toLowerCase().includes(searchPokeys.toLowerCase())
  ) 
})
  //////////////////////////////////////////
  ////Fetching Data and rendering///
  
  const fetchPokemons = async () =>{
    let req = await fetch('http://localhost:3000/pokemon')
    let pokeys = await req.json()
    setPokemons(pokeys)
  }
  
  useEffect (() =>{
    fetchPokemons()
  },[])



  const pokeys = filteredPokeys.map((pokey) =>{
    return(
      <PokemonCard key = {pokey.id} pokey = {pokey} />
    )})

    
    
 //////////////////////////////////////////


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search  searchPokeys = {searchPokeys} setSearchPokeys = {setSearchPokeys}/>
      <br />
      <PokemonCollection pokeys = {pokeys}/>
    </Container>
  );
}

export default PokemonPage;

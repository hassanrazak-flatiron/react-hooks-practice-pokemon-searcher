import React from "react";
import {useState} from 'react'

function Search({searchPokeys,setSearchPokeys}) {

  

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        onChange = {(e) => setSearchPokeys(e.target.value)}
        className="prompt" 
        value = {searchPokeys}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

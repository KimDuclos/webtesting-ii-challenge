import React, { Component } from './node_modules/react';

function Display(props) {
  return (
    // show all stats as they happen
    <div className='Display'>  
      <h2>Strikes: {props.strikes}</h2>
      <h2>Balls: {props.balls}</h2>
      <h2>Fouls: {props.fouls}</h2>
      <h2>Hits: {props.hits}</h2>
    </div>
  );
}

export default Display;
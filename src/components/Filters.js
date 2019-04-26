import React, { Component } from 'react';


const Filters = (props) => {

  return(
    <div>
    <h3>Sort by:</h3>
    <select onChange={props.handleSort}>
      <option value="name">Name</option>
      <option value="weight">Weight</option>
    </select>
    <button onClick={props.handleClick}>greasy hogs</button>
    </div>
  )
}

export default Filters;

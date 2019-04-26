import React, { Component } from 'react';
import HogCard from './HogCard';

const HogList = (props) => {
  console.log(props.hogs)

  const mappedHogs = props.hogs.map(hog => {
    return <HogCard hog={hog} key={hog.name}/>
  })



  return (
    <div className="ui grid container">
      {mappedHogs}
    </div>
  )
}

export default HogList;

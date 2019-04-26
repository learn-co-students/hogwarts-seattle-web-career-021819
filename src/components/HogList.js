import React from 'react'
import HogCard from './HogCard'

const HogList = (props) => {
  return(
    <div className='ui grid container'>
      {props.hogs.map(hog => (<HogCard hog={hog} />))}
    </div>
  )
}

export default HogList

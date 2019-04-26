import React from 'react'

const Filter = (props) => {
  return(
    <div>
    Filter By:
      <select onChange={props.handleFilter}>
        <option value='name'>Name</option>
        <option value='weight'>Weight</option>
        <option value='greased'>Greased</option>
      </select>
    </div>
  )
}

export default Filter

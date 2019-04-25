import React, {Component} from 'react'


const SortFilter = () => {

    return (
      <div className="sort-filter">
        <form>
          <select>
            <option>No need to sort...</option>
            <option>Okay, maybe sort by name?</option>
            <option>Yeeeeah, go ahead and sort by weight.</option>
          </select>
        </form>
      </div>
    )

}


export default SortFilter

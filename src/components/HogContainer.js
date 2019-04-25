import React, {Component} from 'react'
import HogCard from './HogCard'
import {Card, Image} from "semantic-ui-react"


class HogContainer extends Component {

  applyFilter = () => {
    let filteredHogs;

    if (this.props.greaseFilter === "Only greaseballs plz, kthxbye") {
      filteredHogs = this.props.hogs.filter(hog => hog.greased)
    }

    if (this.props.greaseFilter === "No grease allowed!!") {
      filteredHogs = this.props.hogs.filter(hog => !hog.greased)
    }

    if (this.props.greaseFilter === "I'LL TAKE IT ALL") {
      filteredHogs = this.props.hogs
    }

    return filteredHogs
  }

  render() {
    // console.log("this.props.hogs: ", this.props.hogs)
    let filteredHogs = this.applyFilter()
    return(
      <div className="ui grid container">

          {
            filteredHogs.map((hog, index) => {
              return <HogCard key={index} hog={hog} />
            })
          }
        </div>
    )
  }

}


export default HogContainer

import React, {Component} from 'react'
import {Card, Image} from "semantic-ui-react"
import "../App.css"

class HogCard extends Component {

  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick = (ev) => {
    this.setState({clicked: !this.state.clicked})
  }

  getImgSrc = (name) => {
    console.log("name: ", name)
    let imgSrc = require("../hog-imgs/" + name.toLowerCase().replace(/\s/g, "_") + ".jpg")
    console.log("imgSrc: ", imgSrc)
    return imgSrc
  }

  getCardData = () => {
    if (!this.state.clicked) {
      return (<div className="ui eight wide column">
        <div className="image">
          <img src={this.getImgSrc(this.props.hog.name)}/>
        </div>

        <div className="content">
            <p className="name"><strong>Name:</strong> {this.props.hog.name}</p>
        </div>
      </div>)

    } else {

      return (<div className="ui eight wide column">
        <p className="specialty"><strong>Specialty:</strong> {this.props.hog.specialty}</p>
        <p className="weight"><strong>Weight:</strong> {this.props.hog.weight}</p>
        <p className="greased"><strong>Greased?</strong> {this.props.hog.greased ? "Fuck yes!! >:D" : "Sadly, no... :'("}</p>
        <p className="highest-medal-achieved"><strong>Highest Medal Achieved:</strong> {this.props.hog['highest medal achieved']}</p>
      </div>)
    }
  }

  render() {
    return (
      <div className="ui card pigTile" onClick={this.handleClick}>
        {this.getCardData()}
      </div>
    )
  }

}


export default HogCard

import React, { Component } from 'react';

export default class HogCard extends Component {

  state = {
    showDetails: false
  }

  formatUrl = () => {
    let format = this.props.hog.name.toLowerCase().split(' ').join('_')
    return require(`../hog-imgs/${format}.jpg`)
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        showDetails: !prevState.showDetails
      }
    })
  }

  details = () => {
    let {greased, specialty, weight, name} = this.props.hog
    let medal = this.props.hog['highest medal achieved']
    return(
      <div>
      <p>Specialty: { specialty }</p>
      <p>{ greased? "greasy" : "very clean" }</p>
      <p>Weight: { weight }</p>
      <p>Medal: { medal}</p>
      </div>
    )
  }




  render(){
    console.log(this.props)
    return(
      <div className="ui eight wide column" onClick={this.handleClick}>
        <div className="pigTile">
        <img src={this.formatUrl()} alt={this.props.hog.name}/>
        <h3>{this.props.hog.name}</h3>
        {this.state.showDetails ? this.details() : null}
        </div>
      </div>
    )
  }
}

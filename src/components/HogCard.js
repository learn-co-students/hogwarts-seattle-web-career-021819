import React, { Component } from 'react'

export default class HogCard extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  details = () => {
    return(
      <div>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Greased: {this.props.hog.greased ? 'Yes' : 'No'}</p>
        <p>Weight: {this.props.hog.weight}</p>
        <p>Medal: {this.props.hog['highest medal achieved']}</p>
      </div>
    )
  }

  render() {
    const format = this.props.hog.name.toLowerCase().split(' ').join('_')

    return(
      <div className='ui four wide column' onClick={this.handleClick}>
        <div className='pigTile'>
          <h3>{this.props.hog.name}</h3>
          <img src={require(`../hog-imgs/${format}.jpg`)} alt='hog'/>
          {this.state.clicked ? this.details() : null}
        </div>
      </div>
    )
  }
}

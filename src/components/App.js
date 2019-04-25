import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: hogs,
      greaseFilter: "I'LL TAKE IT ALL",
      sortFilter: "No need to sort..."
    }
    this.updateFilter = this.updateFilter.bind(this)
  }

  updateFilter(filter, value) {
    this.setState({[filter]: value})
  }

  render() {
    return (
      <div className="App">
        <Nav updateFilter={this.updateFilter}/>
        <HogContainer hogs={this.state.hogs} greaseFilter={this.state.greaseFilter} sortFilter={this.state.greaseFilter}/>
      </div>
    )
  }
}

export default App;

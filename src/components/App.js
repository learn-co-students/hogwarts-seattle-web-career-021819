import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import Filter from './Filter'


class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs,
      filter: ''
    }
  }

  handleFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  handleSort = () => {
    if(this.state.filter === '') {
      return this.state.hogs
    }
    else if(this.state.filter === 'name') {
      return this.state.hogs.sort(function(a, b){
        if(a.name < b.name)  return -1;
        if(a.name > b.name)  return 1;
          return 0
      })
    } else if(this.state.filter === 'weight'){
        return this.state.hogs.sort(function(a, b){
          return b.weight - a.weight
        })
    } else if(this.state.filter === 'greased') {
        let greasedHogs = this.state.hogs.filter(hog => hog.greased)
        this.setState({
          hogs: greasedHogs
        })
    }
  }

  render() {
    this.handleSort()
    return (
      <div className="App">
          <Nav />
          <Filter handleFilter={this.handleFilter}/>
          <HogList hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;

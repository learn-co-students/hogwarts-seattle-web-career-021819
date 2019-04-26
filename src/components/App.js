import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';


class App extends Component {
  constructor(){
    super()
    this.state={
      hogs: hogs,
      filter: '',
    }
  }

  onFilterClick=(e)=>{
    this.setState({
      filter: e.target.id
    })
  }

  render() {
    return (
      <div className="App">
          < Nav onFilterClick={this.onFilterClick}/>

          <HogContainer filter={this.state.filter} />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';


class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: hogs,
      filter: '',
      displayedHogs: hogs
    }
  }

  hideHog = (hideThisHog) => {
    let newHogs = this.state.displayedHogs.filter(hog => {
      return hog !== hideThisHog
    })
    this.setState({ displayedHogs: newHogs })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < HogContainer
            hogs={this.state.displayedHogs}
            hideHog={this.hideHog}
          />
      </div>
    )
  }
}

export default App;

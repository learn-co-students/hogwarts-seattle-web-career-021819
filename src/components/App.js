import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList';
import Filters from './Filters';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      hogs: hogs,
      filters: {
        sortBy: null,
        greased: false
      }
    }
  }

  handleSort = (e) => {
    let filter = e.target.value

    this.setState(prevState => {
      return {
        ...prevState,
        filters: {
          ...prevState.filters,
          sortBy: filter
        }
      }
    }, this.sortTheHogs)
  }

   sortTheHogs = () => {
     let whatToSort = this.state.filters.sortBy

     let sortedHogs = this.state.hogs.sort((a,b) => {
       if (a[whatToSort] < b[whatToSort]) return -1
       if (a[whatToSort] > b[whatToSort]) return 1
       if (a[whatToSort] === b[whatToSort]) return 0
     })

     this.setState(prevState => {
       return {
         ...prevState,
         hogs: sortedHogs
       }
     })

   }

   handleClick = () => {
     console.log('clicked')
     this.setState(prevState => {
       return {
         ...prevState,
         filters: {
           ...prevState.filters,
           greased: !prevState.filters.greased
         }
       }
     }, this.filterTheHogs)
   }

   filterTheHogs = () => {
     let filteredHogs;
     if (this.state.filters.greased) {
      filteredHogs = this.state.hogs.filter(hog => {
       return hog.greased
     })
   } else {
     filteredHogs = hogs
    }
    this.setState(prevState => {
      return {
        hogs: filteredHogs
      }
    })
   }

  render() {
    return (
      <div className="App">

        < Nav />
      <Filters handleSort={this.handleSort} handleClick={this.handleClick}/>
        <br></br>
        <HogList hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;

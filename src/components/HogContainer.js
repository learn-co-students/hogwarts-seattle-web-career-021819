import React, { Component } from 'react';
import '../App.css';
import HogCard from './HogCard';
import hogs from '../porkers_data';

class HogContainer extends Component {

     constructor(){
          super()
          this.state=({
               currHogs: hogs,
               hiddenHogs: [],
               infoHogs: [],
          })
     }
      
        onInfoClick=(hog)=>{    
          this.setState({
            infoHogs: [...this.state.infoHogs,hog]
          })
        }
      
        onHiddenClick=(hog)=>{
          this.setState({
            hiddenHogs: [...this.state.hiddenHogs,hog]
          })
        }
      
     filterHogs(){ 
          if(this.props.filter===''){
            return this.state.currHogs
          }
          else if(this.props.filter==='name'){
            return this.state.currHogs.sort(function(a, b){
              if(a.name < b.name)  return -1; 
              if(a.name > b.name)  return 1; 
              return 0;
          }) 
          }else if(this.props.filter==='weight'){
            return this.state.currHogs.sort((a,b)=>a.weight-b.weight);
          }else{
            return this.state.currHogs.filter(hog=>hog.greased)
          }
        }

        //nested sort
     
     render(){
          
          return (
               <div className='ui grid container ui cards'>
                    {this.filterHogs().map((hogx, idx)=> {
                         return (<HogCard 
                              key={idx}
                              hog={hogx}
                              hiddenHogs={this.state.hiddenHogs} 
                              infoHogs={this.state.infoHogs}
                              onInfoClick={this.onInfoClick}  
                              onHiddenClick={this.onHiddenClick} />  
                              )         
                         })
                    }                
               </div>
          )
     }
}

export default HogContainer;
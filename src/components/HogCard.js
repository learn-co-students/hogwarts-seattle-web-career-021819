import React from 'react'

const HogCard=(props)=>{
     const name=props.hog.name.toLowerCase().split(" ").join("_") 
          if(props.hiddenHogs.includes(props.hog) && props.hiddenHogs.length!==0){
               return null
          }
     return(
          <div className="ui card">
               <div className="image">
                    <img src={require(`../hog-imgs/${name}.jpg`)} alt=""/>
               </div>

               <div className="content">
                    <a className="header">{props.hog.name}</a>
                   
                    <div className="description">
                         Specialty: {props.hog.specialty}
                    </div>

                
                    {props.infoHogs.includes(props.hog) && props.infoHogs.length!==0 ? 
                         <div className="description">
                              Weight: {props.hog.weight} <br></br>
                         </div>    
                         :  
                         null       
                    }

                    <div className="extra content">
                         <div className="ui two buttons">
                              <div className="ui basic button" onClick={()=>props.onInfoClick(props.hog)}>More Info</div>
                              <div className="ui basic button" onClick={()=>props.onHiddenClick(props.hog)}>Hide Me! </div>
                         </div>
                    </div>
                  
               </div>
          </div>     
     )

}


export default HogCard;

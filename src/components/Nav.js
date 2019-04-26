import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				Sort by name
				<img src={piggy} className="App-logo" id="name" alt="piggy" onClick={props.onFilterClick}/>
				
			</div>
			<div className="TwirlyPig">
				Sort by weight 
				<img src={piggy} className="App-logo" id="weight" alt="piggy" onClick={props.onFilterClick} />
				
			</div>
			<div className="TwirlyPig">
				Sort by greased
				<img src={piggy} className="App-logo" id="greased" alt="piggy" onClick={props.onFilterClick} />
				
			</div>


		</div>
	)
}

export default Nav

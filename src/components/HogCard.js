import React from 'react';

class HogCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayDetails: false
    }
  }

  clickHandler = () => {
    if (this.state.displayDetails === false) {
      this.setState({ displayDetails: true })
    } else {
      this.setState({ displayDetails: false })
    }
  }

  render() {
    const {name, specialty, greased, weight, "highest medal achieved":medal} = this.props.hog
    return (
      <div className="ui eight wide column">
        <div className="pigTile">
          <div className="image">
            <img alt="" src={require(`../hog-imgs/${this.props.img}.jpg`)}/>
          </div>
          <div className="content">
            <h3>{name}</h3>
            <div className="description">
              Specialty: {specialty}
            </div>

          {this.state.displayDetails ?
            <div className="description">
              Weight: {weight} <br />
              Greased: {greased ? "Yes" : "No"} <br/>
              Highest Medal Achieved: {medal}
            </div>
            :
            null
          }

            <div className="extra content">
              <button
                className="ui button"
                onClick={this.clickHandler}
              >
                {this.state.displayDetails ? "Hide Info" : "More Info"}
              </button>
              <button
                className="ui button"
                onClick={() => this.props.hideHog(this.props.hog)}
              >
                Hide Me
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default HogCard

import React from 'react';
import HogCard from './HogCard';

let hogImg = {
  'Mudblood': 'mudblood',
  'Porkchop': 'porkchop',
  'Cherub': 'cherub',
  'Piggy smalls': 'piggy_smalls',
  'Trouble': 'trouble',
  'Sobriety': 'sobriety',
  'Rainbowdash': 'rainbowdash',
  'TruffleShuffle': 'truffleshuffle',
  'Bay of Pigs': 'bay_of_pigs',
  'The Prosciutto Concern': 'the_prosciutto_concern',
  'Galaxy Note': 'galaxy_note',
  'Leggo My Eggo': 'leggo_my_eggo',
  'Augustus Gloop': 'augustus_gloop'
};

class HogContainer extends React.Component {


  render() {
    return(
      <div className="ui grid container indexWrapper">
        {this.props.hogs.map((hog, index) => {
          return <HogCard
                   hog={hog}
                   key={index}
                   img={hogImg[hog.name]}
                   hideHog={this.props.hideHog}
                 />
        })}
      </div>
    )
  }

}

export default HogContainer

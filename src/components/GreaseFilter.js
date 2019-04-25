import React, {Component} from 'react'




class GreaseFilter extends Component {

  handleChange = (ev) => {
    this.props.updateFilter("greaseFilter", ev.target.value)
  }

  render() {
    return (
      <div className="grease-filter">
        <form onChange={this.handleChange}>
          <select>
            <option>I'LL TAKE IT ALL</option>
            <option>Only greaseballs plz, kthxbye</option>
            <option>No grease allowed!!</option>
          </select>
        </form>
      </div>
    )
  }

}


export default GreaseFilter

import React from 'react';


export default class ToggleDateClock extends React.Component {

  render() {
    return (

      <div className='button-container'>
        <button
          className="time-button"
          onClick={this.props.handleToggle}
        >{this.props.clock ? "Display Date" : "Display Clock"}
        </button>
      </div>


    )
  }
}
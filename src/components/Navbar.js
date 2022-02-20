import React from 'react';

export default class Navbar extends React.Component {

  render() {
    return (

      <div className='navbar'>
        <div className="button-container">
          <button onClick={this.props.handleClock}>
            Date and Time
          </button>
          <button onClick={this.props.handleTimer} >
            Timer
          </button>
        </div>

      </div>

    )
  }
}
import React from 'react';

import DateAndClock from './DateAndClock';
import Navbar from './Navbar';
import Timer from './Timer';

export default class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      clock: true,
    };
    this.handleClock = this.handleClock.bind( this );
    this.handleTimer = this.handleTimer.bind( this );
  }

  handleClock() {
    this.setState( { clock: true } )
  }

  handleTimer() {
    this.setState( { clock: false } )
  }

  render() {
    return (
      <div className="main-container">

        <Navbar
          handleClock={this.handleClock}
          handleTimer={this.handleTimer} />

        {this.state.clock
          ? <DateAndClock />
          : <Timer />
        }

      </div >
    )
  }
}
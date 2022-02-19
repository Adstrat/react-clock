import React from 'react';

import DateAndClock from './DateAndClock';
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

        <div className='button-container'>
          <button onClick={this.handleClock}>
            Date and Time
          </button>
          <button onClick={this.handleTimer} >
            Timer
          </button>
        </div>

        {this.state.clock
          ? <DateAndClock />
          : <Timer />
        }

      </div >
    )
  }
}
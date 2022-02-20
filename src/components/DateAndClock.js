import React from 'react';
import Clock from './Clock';
import Color from './Color';
import Date from './Date';
import ToggleDateClock from './ToggleDateClock';

export default class DateAndClock extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      color: '#39D1B4',
      clock: true
    };
    this.handleToggle = this.handleToggle.bind( this );
    this.handleGreen = this.handleGreen.bind( this );
    this.handleBlue = this.handleBlue.bind( this );
    this.handleRed = this.handleRed.bind( this );
  }

  handleToggle() {
    this.setState( prevState => ( {
      clock: !prevState.clock
    } ) );
  }

  handleGreen() {
    this.setState( { color: '#39D1B4' } )
  }

  handleBlue() {
    this.setState( { color: '#487BA0' } )
  }

  handleRed() {
    this.setState( { color: '#D84A51' } )
  }

  render() {
    return (

      <div>

        <div className="time-container">
          {this.state.clock &&
            <Clock
              style={{
                color: this.state.color,
              }}
            />
          }
          {!this.state.clock &&
            <Date
              style={{
                color: this.state.color,
              }}
            />
          }
        </div>

        <ToggleDateClock
          handleToggle={this.handleToggle}
          clock={this.state.clock} />


        <Color
          handleGreen={this.handleGreen}
          handleBlue={this.handleBlue}
          handleRed={this.handleRed} />

      </div >
    )
  }
}

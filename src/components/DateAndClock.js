import React from 'react';
import Clock from './Clock';
import Date from './Date';

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

        <div className='button-container'>
          <button
            className="time-button"
            onClick={this.handleToggle}
          >{this.state.clock ? "Display Date" : "Display Clock"}
          </button>
        </div>

        <div className="color-container">
          <div
            className="color green"
            onClick={this.handleGreen}>
          </div>
          <div
            className="color blue"
            onClick={this.handleBlue}>
          </div>
          <div
            className="color red"
            onClick={this.handleRed}>
          </div>
        </div>

      </div >
    )
  }
}

import React from 'react';
import Clock from './Clock';
import Date from './Date';
import Timer from './Timer';

export default class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      color: '#39D1B4',
      clock: true,
      date: false
    };
    this.handleDateClick = this.handleDateClick.bind( this );
    this.handleTimeClick = this.handleTimeClick.bind( this );
    this.handleGreen = this.handleGreen.bind( this );
    this.handleBlue = this.handleBlue.bind( this );
    this.handleRed = this.handleRed.bind( this );
  }

  handleDateClick() {
    this.setState( { clock: false, date: true } )
  }

  handleTimeClick() {
    this.setState( { clock: true, date: false } )
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

      <div className="main-container">
        <div className="button-container">
          <button
            className="time-button"
            onClick={this.handleTimeClick}
          >Show Time
          </button>
          <button
            className="date-button"
            onClick={this.handleDateClick}
          >Show Date
          </button>
        </div>

        <div className="time-container">
          {this.state.clock &&
            <Clock
              style={{
                color: this.state.color,
              }}
            />
          }
          {this.state.date &&
            <Date
              style={{
                color: this.state.color,
              }}
            />
          }
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

        <Timer />

      </div >
    )
  }
}

import './App.css';
import React from 'react';
import Clock from './Clock';
import Date from './Date';

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
  }

  handleDateClick() {
    this.setState( { clock: false, date: true } )
  }

  handleTimeClick() {
    this.setState( { clock: true, date: false } )
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

      </div >
    )
  }
}

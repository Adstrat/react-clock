import './App.css';
import React from 'react';

export default class App extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      date: new Date(),
      color: '#39D1B4',
      background: '#ebf4e8'
    };
  }

  componentDidMount() {
    setInterval( () => {
      this.setState( { date: new Date() } );
    }, 1000 );
  }

  render() {
    return (
      <div className="main-container">
        <div className="time-container">
          <h1
            className="clock"
            style={{
              color: this.state.color,
              backgroundColor: this.state.background
            }}
          >
            {this.state.date.toLocaleTimeString()}
          </h1>
        </div>
      </div >
    )
  }
}

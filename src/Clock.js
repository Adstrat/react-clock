import './App.css';
import React from 'react';

export default class Clock extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval( () => {
      this.setState( { date: new Date() } );
    }, 1000 );
  }

  componentWillUnmount() {
    clearInterval( this.timerID );
  }

  render() {
    return (
      <button
        className="clock"
        style={this.props.style}
      >
        {this.state.date.toLocaleTimeString()}
      </button>
    )
  }
}

import './App.css';
import React from 'react';
import Clock from './Clock';

export default class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      color: '#39D1B4',
      background: '#ebf4e8',
      font: '400%'
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
      <div className="main-container">
        <div className="time-container">
          <Clock
            style={{
              color: this.state.color,
              backgroundColor: this.state.background,
              fontSize: this.state.font
            }}
          />
        </div>
      </div >
    )
  }
}

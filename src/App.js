import './App.css';
import React from 'react';

export default class App extends React.Component {

  constructor( props ) {
    super( props );
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval( () => {
      this.setState( { date: new Date() } );
    }, 1000 );
  }

  render() {
    return (
      <div className="container">
        <h1 className="clock">{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

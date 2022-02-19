import React from 'react';

export default class Clock extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <div
        className="time"
        style={this.props.style}
      >
        {this.state.date.toDateString()}
      </div>
    )
  }
}

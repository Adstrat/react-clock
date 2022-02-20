import React from 'react';

export default class Color extends React.Component {

  render() {
    return (

      <div className="color-container">
        <div
          className="color green"
          onClick={this.props.handleGreen}>
        </div>
        <div
          className="color blue"
          onClick={this.props.handleBlue}>
        </div>
        <div
          className="color red"
          onClick={this.props.handleRed}>
        </div>
      </div>

    )
  }
}
import React from 'react';

import DateAndClock from './DateAndClock';
import Timer from './Timer';

export default class App extends React.Component {


  render() {
    return (
      <div className="main-container">

        <div className='button-container'>
          <button >
            Date and Time
          </button>
          <button className="button" >
            Timer
          </button>
        </div>

        <DateAndClock />
        <Timer />

      </div >
    )
  }
}

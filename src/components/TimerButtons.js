import React from 'react';

const TimerButtons = ( { toggle, reset, isActive } ) => {

  return (

    <div className='button-container'>
      <button onClick={toggle}>
        {isActive ? 'Stop' : 'Start'}
      </button>
      <button className="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default TimerButtons;
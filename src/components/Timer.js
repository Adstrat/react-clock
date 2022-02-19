import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState( 0 );
  const [isActive, setIsActive] = useState( false );

  function toggle() {
    setIsActive( !isActive );
  }

  function reset() {
    setSeconds( 0 );
    setIsActive( false );
  }

  useEffect( () => {
    let interval = null;
    if ( isActive ) {
      interval = setInterval( () => {
        setSeconds( seconds => Number( ( seconds + 0.1 ).toFixed( 1 ) ) );
      }, 100 );
    } else if ( !isActive && seconds !== 0 ) {
      clearInterval( interval );
    }
    return () => clearInterval( interval );
  }, [isActive, seconds] );

  return (
    <div>
      <h1 className='time-container time'>
        {seconds}s
      </h1>
      <div className='button-container'>
        <button onClick={toggle}>
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
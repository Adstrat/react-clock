import React, { useState, useEffect } from 'react';
import TimerButtons from './TimerButtons';

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
      <div className='time-container'>
        <div className="time">
          {seconds}s
        </div>
      </div>
      <TimerButtons
        toggle={toggle}
        reset={reset}
        isActive={isActive} />


    </div>
  );
};

export default Timer;
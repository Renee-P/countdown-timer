import React from 'react';

function TimerDisplay({ time }) {
  const formatTime = (t) => (t < 10 ? `0${t}` : t);

  return (
    <div className="text-center">
      <div
        className="border border-dark p-3"
        style={{
          backgroundColor: 'black',
          color: 'white',
          fontSize: '3rem',
          borderRadius: '15px', // Adjust the value for more or less rounding
        }}
      >
        <h1>
          {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
        </h1>
      </div>
    </div>
  );
}

export default TimerDisplay;

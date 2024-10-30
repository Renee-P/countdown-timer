import React, { useState, useEffect } from 'react';
import InputComponent from './Input';
import TimerDisplay from './Timer';

function Countdown() {
  const [inputTime, setInputTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [timeLeft, setTimeLeft] = useState(inputTime);
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (type, value) => {
    setInputTime((prevTime) => ({
      ...prevTime,
      [type]: Math.max(0, parseInt(value) || 0),
    }));
  };

  const startTimer = () => {
    setTimeLeft(inputTime);
    setIsActive(true);
  };

  useEffect(() => {
    if (!isActive || (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0)) {
      setIsActive(false);
      return;
    }

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) return { ...prevTime, seconds: seconds - 1 };
        if (minutes > 0) return { hours, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { hours: hours - 1, minutes: 59, seconds: 59 };
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [isActive, timeLeft]);

  return (
    <div>
      <InputComponent onChange={handleInputChange} values={inputTime} />
      <div className="d-flex justify-content-center mt-3" style={{ marginBottom: '50px' }}>
        <button onClick={startTimer} className="btn btn-dark">
            Start Timer
        </button>
    </div>
      <TimerDisplay time={timeLeft} />
    </div>
  );
}

export default Countdown;

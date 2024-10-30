import React from 'react';

function InputComponent({ onChange, values }) {
  return (
    <div>
      <input
        type="number"
        placeholder="Hours"
        value={values.hours || ''} 
        onChange={(e) => onChange('hours', e.target.value)}
      />
      <input
        type="number"
        placeholder="Minutes"
        value={values.minutes || ''} 
        onChange={(e) => onChange('minutes', e.target.value)}
      />
      <input
        type="number"
        placeholder="Seconds"
        value={values.seconds || ''} 
        onChange={(e) => onChange('seconds', e.target.value)}
      />
    </div>
  );
}

export default InputComponent;

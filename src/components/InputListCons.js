import React, { useState } from 'react';

function InputList() {
  const [inputs, setInputs] = useState(['']);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value === '' && index !== newInputs.length - 1) {
      newInputs.splice(index, 1);
      setInputs(newInputs);
    } else if (index === newInputs.length - 1 && value !== '' && (/^\S+$/.test(value))) {
      setInputs([...newInputs, '']);
    }
  };

  return (
    <ol>
      {inputs.map((value, index) => (
        <li key={index}>
          <input
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </li>
      ))}
    </ol>
  );
}

export default InputList;

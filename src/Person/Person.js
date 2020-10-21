import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = ({ click, name, age, changed }) => {
  return (
    <div className="Person">
      <p onClick={click}>
        I'm {name} and I am {age} years old!
      </p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Radium(Person);
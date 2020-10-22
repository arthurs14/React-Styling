import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;


  @media (min-width: 500px) {
    .Person {
      width: 450px;
    }
  }
`;

const Person = ({ click, name, age, changed }) => {
  return (
    <StyledDiv>
      <p onClick={click}>
        {`I'm ${name} and I am ${age} years old!`}
      </p>
      <input type="text" onChange={changed} value={name} />
    </StyledDiv>
  );
};

export default Person;
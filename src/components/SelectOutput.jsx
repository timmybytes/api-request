import React from 'react';
import { useEffect, useState } from 'react';

const SelectOutput = ({ onChange }) => {
  const handleClick = e => {
    const selection = e.target.value;
    onChange(selection);
  };
  return (
    <nav className='select'>
      <ul>
        <li>
          <button onClick={e => handleClick(e)} value='posts'>
            Posts
          </button>
        </li>
        <li>
          <button onClick={e => handleClick(e)} value='users'>
            Users
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SelectOutput;

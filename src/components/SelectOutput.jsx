import React from 'react';

const SelectOutput = ({ onChange }) => {
  return (
    <nav className='select'>
      <ul>
        <li>
          <button onClick={e => onChange(e.target.value)} value='posts'>
            Posts
          </button>
        </li>
        <li>
          <button onClick={e => onChange(e.target.value)} value='users'>
            Users
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SelectOutput;

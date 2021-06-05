import React, { useState } from 'react';
import Posts from './components/Posts';
import Users from './components/Users';
import SelectOutput from './components/SelectOutput';

const App = () => {
  const [data, setData] = useState(null);

  const handleSelection = selection => {
    setData(selection);
  };

  return (
    <div className='app'>
      <h1>API Data</h1>
      <SelectOutput onChange={handleSelection} />
      {data === 'users' && <Users />}
      {data === 'posts' && <Posts />}
    </div>
  );
};

export default App;

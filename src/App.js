import React, { useState, useEffect } from 'react';

const App = () => {
  const [userData, setUserData] = useState([]);

  // Call useEffect once on initialization/mount only to avoid infinite loop
  useEffect(() => {
    const users = fetch('https://jsonplaceholder.typicode.com/users').then(
      res =>
        res.json().then(data => {
          setUserData(data);
        })
    );
  }, []);

  // Concat first two users with users displayed in table for final array
  const amendUsers = () => {
    const tableUsers = userData.filter(
      user => user.name[0] !== 'M' && user.name[0] !== 'K'
    );
    const finalUsers = [userData[0], userData[1]].concat(tableUsers);
    return finalUsers.map(user => <span>{user.name},</span>);
  };

  return (
    <>
      <div
        className='App'
        style={{
          border: '1px solid #444444',
          margin: '0 auto',
          maxWidth: '800px',
        }}>
        {userData
          .filter(user => user.name[0] !== 'M' && user.name[0] !== 'K')
          .map((user, idx) => (
            <article
              style={{
                flex: 1,
                background: user.id % 2 ? 'lightgrey' : 'white',
                display: 'flex',
                padding: '10px',
                flexDirection: 'row',
                alignItems: 'flex-end',
                alignContent: 'flex-end',
                justifyItems: 'space-between',
                margin: '0 auto',
                justifyContent: 'space-between',
              }}>
              <div key={idx}>
                {user.name} | {user.email}
              </div>
              <div
                style={{
                  padding: '5px',
                  border: '1px solid #444444',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '300px',
                }}>
                <div>#</div>
                <div>
                  <a href='#'>
                    {user.phone.replace(')', '-').replace('(', '-')}
                  </a>
                </div>
                <div></div>
              </div>
            </article>
          ))}
      </div>
      <div
        style={{
          margin: '0 auto',
          maxWidth: '800px',
        }}>
        {amendUsers()}
      </div>
    </>
  );
};

export default App;

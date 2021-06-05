import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser';

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getData = async resource => {
      let res = await fetch(resource);
      if (res.status !== 200) {
        throw new Error(`Failed to fetch from ${resource}`);
      }
      let data = await res.json();
      return data;
    };

    getData('https://jsonplaceholder.typicode.com/users')
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h2>Users</h2>
      <div className='posts'>
        {users &&
          users.map(user => {
            return <SingleUser user={user} key={user.id} />;
          })}
      </div>
    </>
  );
};

export default Users;

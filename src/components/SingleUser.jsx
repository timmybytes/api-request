import React, { useEffect, useState } from 'react';

const SingleUser = ({ user }) => {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    // Generate avatar with user's initials
    setAvatar(
      `https://ui-avatars.com/api?name=${user.name.split(' ').join('+')}`
    );
  }, [user]);
  return (
    <article className='users__user'>
      <img src={avatar} alt='random' />
      <div className='users__user-data'>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </article>
  );
};

export default SingleUser;

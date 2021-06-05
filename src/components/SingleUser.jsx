const SingleUser = ({ user }) => {
  console.log(user);
  return (
    <article className='users__user'>
      <img src='https://picsum.photos/200' alt='random' />
      <div className='users__user-data'>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </article>
  );
};

export default SingleUser;

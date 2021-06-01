const SinglePost = ({ post }) => {
  return (
    <article className='posts__post'>
      <img src='https://picsum.photos/200' alt='random' />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
};

export default SinglePost;

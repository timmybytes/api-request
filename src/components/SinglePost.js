import React from 'react';

const SinglePost = ({ post }) => {
  return (
    <article className='posts__post'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
};

export default SinglePost;

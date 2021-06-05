import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';

const Posts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getData = async resource => {
      let res = await fetch(resource);
      if (res.status !== 200) {
        throw new Error(`Failed to fetch from ${resource}`);
      }
      let data = await res.json();
      return data;
    };

    getData('https://jsonplaceholder.typicode.com/posts')
      .then(data => setPosts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <div className='posts'>
        {posts &&
          posts.slice(0, 5).map(post => {
            return <SinglePost post={post} key={post.id} />;
          })}
      </div>
    </>
  );
};

export default Posts;

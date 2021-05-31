import React, { useState, useEffect } from 'react';

const App = () => {
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
    <div className='App'>
      <h1>API Data</h1>
      {posts &&
        posts.map(post => {
          return (
            <article
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '450px',
                justifyContent: 'center',
                alignContent: 'center',
                margin: '1rem',
                padding: '1rem',
                border: '1px solid black',
                borderRadius: '6px',
              }}
              key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </article>
          );
        })}
    </div>
  );
};

export default App;

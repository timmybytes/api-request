// HTTP status codes:
// 100s - Information responses
// 200s - Success reponses
// 300s - Redirection messages
// 400s - Client error responses
// 500s - Server error responses

// Fetch API:
//    1. fetch data
//    2. return response
//    3. do something with the data
//    4. catch any errors

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => {
//     console.log('resolved', res);
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('rejected', err);
//   });

// async & await
const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (res.status !== 200) {
    throw new Error('OH NOES! Cannot fetch the data');
  }
  const data = await res.json();

  return data;
};

getTodos()
  .then(data => console.log('resolved', data))
  .catch(err => console.log('rejected', err.message));

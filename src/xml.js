// HTTP status codes:
// 100s - Information responses
// 200s - Success reponses
// 300s - Redirection messages
// 400s - Client error responses
// 500s - Server error responses

// XML
const getTodos = (resource, callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });

    request.open('GET', resource);
    request.send();
  });
};

getTodos('https://jsonplaceholder.typicode.com/todos')
  .then(data => {
    console.log('promise resolved', data);
  })
  .catch(err => {
    console.log('promise rejected', err);
  });

// > > > CALLBACK HELL < < <
// getTodos('https://jsonplaceholder.typicode.com/todos', (err, data) => {
//   console.log(data);
//   getTodos('https://jsonplaceholder.typicode.com/posts', (err, data) => {
//     console.log(data);
//     getTodos('https://jsonplaceholder.typicode.com/users', (err, data) => {
//       console.log(data);
//     });
//   });
// });

// Promise example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     // resolve('some data');
//     reject('error');
//   });
// };
// getSomething().then(
//   data => {
//     console.log(data); // 1st: data from resolve
//   },
//   err => {
//     console.log(err); // 2nd: data from error
//   }
// );

// Works same as above but is simpler with then().catch()
// getSomething().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })

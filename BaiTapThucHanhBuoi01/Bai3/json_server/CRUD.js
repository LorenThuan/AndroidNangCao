var sourceApi = 'http://localhost:3000/posts';

// Listing all resources
// fetch(sourceApi)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Creating a resource
// fetch(sourceApi, {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     author: 'bar',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Updating a resource
// fetch('http://localhost:3000/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'bue',
//     author: 'joe',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Patching a resource
// fetch('http://localhost:3000/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'bue',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Deleting a resource
// fetch('http://localhost:3000/posts/1', {
//   method: 'DELETE',
// });

//Filtering resources
// This will return all the posts that belong to the first user
fetch('http://localhost:3000/posts?author=bar')
  .then((response) => response.json())
  .then((json) => console.log(json));

//Listing nested resources
// This is equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));
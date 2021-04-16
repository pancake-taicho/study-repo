// THE PROMISES VERSION

// mimicking an array of blog posts
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
]

// mimicking a server call to get an array of blog posts and render them
function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000)
}

// mimicking the creation of a post that takes longer than the above getPosts()
function createPost(post) { // instead of a callback, we want to return a new Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false; // for error checking
  
      if(!error) { // resolving or rejecting the Promise
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

/*

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(err => console.log(err)); 
  // we use .then to chain off the Promise.
  // .then will call getPosts after the Promise has resolved
  // .catch is to handle errors

*/

/*
// Async / Await
async function init() {
  await createPost({ title: 'Post Three', body: 'This is post three' });

  getPosts();
}

init();
*/

// Async / Await / Fetch
async function fetchUsers() {
  // How to handle a fetch call in an async function:
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

fetchUsers();

/*
// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
  setTimeout(resolve, 2000, 'Goodbye') // 'Goodbye' gets passed into setTimeout's callback (resolve)
);

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json()); // <-- how to handle parsing a fetch request

Promise.all([promise1, promise2, promise3, promise4]).then(values => 
  console.log(values));
*/
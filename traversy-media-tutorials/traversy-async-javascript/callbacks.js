// THE CALLBACK VERSION

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
function createPost(post, callback) { // handling async using a callback
  setTimeout(() => {
    posts.push(post);
    callback();  
  }, 2000)
}
// calling the callback after the new post is created ensures that the new post is shown

// getPosts();

// Post Three never shows because it took longer than getPosts()
createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);
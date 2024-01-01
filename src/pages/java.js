const renderPosts = async () => {
    let url = 'http://localhost:3000/posts';
    const res = await fetch(url);
    const posts = await res.json();
    // console.log(posts);
    const blogPosts = [];
    for (let post of posts) {
      blogPosts.push(post);
    }
    // console.log(blogPosts);
  
    const stringifiedList = JSON.stringify(blogPosts);
    const blogPost = JSON.parse(stringifiedList);
    console.log(blogPost);
    
    //return blogPost;
  }
  
  // Call renderPosts and store the returned value in a variable
  const myBlogPost = renderPosts();
  console.log(myBlogPost);
  // You can now use myBlogPost array in your React app
  
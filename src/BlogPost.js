import React from 'react';

function BlogPost(props) {
  return (
    <div>
      <br></br>
      <img src={props.imgSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>Written by {props.author} on {props.date}</p>
    </div>
  );
}

export default BlogPost;

import React, { useState } from 'react';

const HomePage = () => {
  const [content, setContent] = useState(''); // State for input field
  const [posts, setPosts] = useState([]); // State for list of posts

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim()) {
      setPosts([...posts, content]); // Add new post to the list
      setContent(''); // Clear the input field
    }
  };

  return (
    <div>
      <header>
        <h1>My Blog</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={handleInputChange}
            placeholder="Write something..."
            rows="4"
            cols="50"
          />
          <button type="submit">Create Post</button>
        </form>
        <div id="posts">
          {posts.map((post, index) => (
            <div key={index} className="post">
              {post}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;

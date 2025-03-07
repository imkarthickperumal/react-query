import axios from "axios";
import React, { useState, useEffect } from "react";

const PostsTradetional = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      setPosts(response.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Page is Loading...</div>;
  }
  if (isError) {
    return <div>Error has occurred...</div>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsTradetional;

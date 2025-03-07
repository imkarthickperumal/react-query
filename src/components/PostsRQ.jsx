import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PostsRQ = () => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get("http://localhost:4000/posts");
    },
    // staleTime: 30000, // staleTime
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true, // these twp are fetching data every 1mil sec
    enabled: false
  });

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="post-list">
      <button onClick={refetch}>Fetch Data</button>
      {data?.data.map((post) => (
        <div className="post-item" key={post.id}>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsRQ;

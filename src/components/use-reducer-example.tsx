import React, { useReducer, useEffect } from "react";
import { reducer, initialState } from "../reducer";
import { fetchPosts } from "../api";

export const ReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getPosts = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await fetchPosts();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (e) {
        console.log(e);
        dispatch({ type: "FETCH_ERROR", payload: "Failed to fetch posts" });
      }
    };

    getPosts();
  }, []);

  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>{state.error}</div>;

  return (
    <div className="flex gap-y-4 flex-col max-w-[800px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Posts</h1>
      {state.posts.map((post, index) => (
        <div key={post.id}>
          <h2 className="font bold text-xl">
            {index + 1}. {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

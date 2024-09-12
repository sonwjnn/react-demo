import { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const FunctionComponent = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (e) {
        console.log(e);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex gap-y-4 flex-col max-w-[800px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Posts</h1>
      {posts.map((post, index) => (
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

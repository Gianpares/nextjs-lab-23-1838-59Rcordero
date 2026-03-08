import { Suspense } from "react";
import PostsLoading from "./Loading";
type Post = {
  id: number;
  title: string;
  body: string;
};

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function PostsPage() {
  const posts: Post[] = await fetchPosts();

  return (
    <div className="min-h-screen p-10 bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
        Posts
      </h1>

      <Suspense fallback={<PostsLoading />}>
        {posts.slice(0, 10).map((post: Post) => (
          <div
            key={post.id}
            className="p-6 rounded-lg bg-white dark:bg-zinc-900 shadow"
          >
            <h2 className="text-xl font-semibold text-black dark:text-white">
              {post.title}
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {post.body.substring(0, 100)}...
            </p>
            <a
              href={`/posts/${post.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read More
            </a>
          </div>
        ))}
      </Suspense>
    </div>
  );
}
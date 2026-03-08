interface PageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PageProps) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return (
    <div className="min-h-screen p-10 bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
        {post.title}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">{post.body}</p>

      <a
        href="/posts"
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        ← Back to Posts
      </a>
    </div>
  );
}
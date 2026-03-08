export default function PostsLoading() {
  return (
    <div className="min-h-screen p-10 bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
        Posts
      </h1>

      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-lg bg-white dark:bg-zinc-900 shadow animate-pulse"
          >
            <div className="h-6 bg-zinc-300 dark:bg-zinc-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-600 rounded w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
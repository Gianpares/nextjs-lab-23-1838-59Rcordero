import Image from "next/image";
import Hello from "./Hello";
import UserCard from "./UserCard";
import Counter from "./Counter";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-16 px-8 bg-white dark:bg-black sm:items-start">
        <Hello />

        <div className="mt-10 w-full flex flex-wrap gap-6">
          <UserCard name="Alice" role="Frontend Developer" age={25} />
          <UserCard name="Bob" role="Backend Developer" />
        </div>

        <div className="mt-10 w-full">
          <Counter />
        </div>

        <div className="mt-10">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left mt-8">
          <h2 className="max-w-xs text-2xl font-semibold leading-8 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h2>
          <p className="max-w-md text-base leading-6 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js"
              className="font-medium text-zinc-950 dark:text-zinc-50 underline"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium text-zinc-950 dark:text-zinc-50 underline"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-6">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-white transition-colors hover:bg-gray-800 md:w-[158px]"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
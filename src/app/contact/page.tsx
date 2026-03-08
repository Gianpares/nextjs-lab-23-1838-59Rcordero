"use client"; // This allows form interactivity and client hooks

import { FormEvent } from "react";

export default function ContactPage() {
  // Optional: state for form feedback
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Server action simulation: send to server via fetch API
    // Here we just log it
    console.log("Submitted data:", data);

    // Reset form after submit
    e.currentTarget.reset();

    alert("Message submitted! Check console for data.");
  };

  return (
    <div className="min-h-screen p-10 bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
        Contact Us
      </h1>

      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Feel free to send us a message.
      </p>

      <form className="flex flex-col gap-4 max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-3 rounded border dark:bg-zinc-900 dark:border-zinc-700"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded border dark:bg-zinc-900 dark:border-zinc-700"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="p-3 rounded border dark:bg-zinc-900 dark:border-zinc-700"
          required
        />

        <button
          type="submit"
          className="bg-black text-white rounded p-3 hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
'use client';

import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const { items, total } = useCart();

  return (
    <nav className="flex gap-4 items-center">
      <a href="/" className="text-black dark:text-zinc-50 hover:underline">Home</a>
      <a href="/posts" className="text-black dark:text-zinc-50 hover:underline">Posts</a>
      <a href="/contact" className="text-black dark:text-zinc-50 hover:underline">Contact</a>
      <a href="/shop" className="text-black dark:text-zinc-50 hover:underline">Shop</a>

      
      <div className="ml-4 text-sm font-semibold text-black dark:text-zinc-50">
        Cart: {items.length} item{items.length !== 1 ? "s" : ""} | ${total.toFixed(2)}
      </div>
    </nav>
  );
}
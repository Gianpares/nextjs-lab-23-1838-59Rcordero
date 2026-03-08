"use client"; 

import { useCart } from "@/lib/cart-context";

export default function CartSummary() {
  const { items, total } = useCart();

  return (
    <div className="ml-4 text-sm font-semibold text-black dark:text-zinc-50">
      Cart: {items.length} item{items.length !== 1 ? "s" : ""} (${total.toFixed(2)})
    </div>
  );
}
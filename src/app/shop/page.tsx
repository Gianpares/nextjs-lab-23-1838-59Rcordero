"use client";

import { useCart } from "@/lib/cart-context";

const products = [
  { id: 1, name: "Doggy Treats", price: 8 },
  { id: 2, name: "Cat nip", price: 15 },
  { id: 3, name: "Dino kibble", price: 100 },
];

export default function ShopPage() {
  const { items, total, addItem, removeItem } = useCart();

  return (
    <div className="min-h-screen p-10 bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
        Shop
      </h1>

      <div className="mb-6 p-4 bg-white dark:bg-zinc-900 rounded shadow">
        <p className="text-black dark:text-white">Items in Cart: {items.length}</p>
        <p className="text-black dark:text-white">Total: ${total}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-6 bg-white dark:bg-zinc-900 rounded shadow"
          >
            <h2 className="text-xl font-semibold text-black dark:text-white">
              {product.name}
            </h2>

            <p className="text-black dark:text-white mb-4">
              ${product.price}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => addItem(product)}
                className="bg-black text-white rounded p-2 flex-1"
              >
                Add
              </button>

              <button
                onClick={() => removeItem(product.id)}
                className="bg-red-600 text-white rounded p-2 flex-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
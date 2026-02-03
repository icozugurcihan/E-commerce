import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function Bestseller() {
  const bestsellerProducts = products.slice(0, 8);

  return (
    <section className="flex flex-col items-center px-4 py-20 gap-10">
      
      {/* TITLE */}
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm text-gray-500">
          Featured Products
        </p>
        <h2 className="text-xl font-bold">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-sm text-gray-500">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[1200px]">
        {bestsellerProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function Bestseller() {
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
      <div className="flex flex-wrap justify-center gap-8 max-w-[1200px]">
        {products.map((product) => (
          <div key={product.id} className="w-[260px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

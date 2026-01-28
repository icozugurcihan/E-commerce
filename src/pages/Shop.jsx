import { products } from "../data/products";

export default function Shop() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-10 text-center">
        Shop
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 flex flex-col gap-3"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-cover rounded-lg"
            />

            {/* Category */}
            <span className="text-sm text-gray-500">
              {product.category}
            </span>

            {/* Title */}
            <h2 className="font-semibold text-base">
              {product.title}
            </h2>

            {/* Price */}
            <span className="font-bold text-lg">
              ${product.price}
            </span>

            {/* Colors */}
            <div className="flex gap-2 mt-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

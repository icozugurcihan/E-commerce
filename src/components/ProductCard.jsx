export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center gap-4">

      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full object-cover"
      />

      {/* INFO */}
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="font-bold text-sm">
          {product.title}
        </h3>
        <p className="text-xs text-gray-500">
          {product.category}
        </p>

        <p className="text-sm font-semibold text-green-600">
          ${product.price}
        </p>
      </div>

      {/* COLORS */}
      <div className="flex gap-2">
        {product.colors.map((color, index) => (
          <span
            key={index}
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

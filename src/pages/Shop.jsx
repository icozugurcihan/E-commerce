import { useState } from "react";
import { products } from "../data/products";

const PRODUCTS_PER_PAGE = 8;

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("grid"); // grid | list
const [tempSort, setTempSort] = useState("default");
const [activeSort, setActiveSort] = useState("default");


  // SORT
const sortedProducts = [...products].sort((a, b) => {
  if (activeSort === "priceLow") return a.price - b.price;
  if (activeSort === "priceHigh") return b.price - a.price;
  return 0;
});


  // PAGINATION
  const totalPages = Math.ceil(
    sortedProducts.length / PRODUCTS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const visibleProducts = sortedProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <main className="px-6 lg:px-20 py-10">
      <h2 className="text-2xl font-semibold mb-6">Shop</h2>

      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <p className="text-sm text-gray-500">
          Showing all {products.length} results
        </p>

        <div className="flex items-center gap-3">
          {/* VIEW TOGGLE */}
          <div className="flex border rounded overflow-hidden">
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-2 text-sm ${
                view === "grid"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              
              ⬛⬛⬛
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-2 text-sm ${
                view === "list"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              ☰
            </button>
          </div>

          {/* SORT */}
<select
  value={tempSort}
  onChange={(e) => setTempSort(e.target.value)}
  className="border px-3 py-2 rounded text-sm"
>
  <option value="default">Popularity</option>
  <option value="priceLow">Price: Low to High</option>
  <option value="priceHigh">Price: High to Low</option>
</select>


          {/* FILTER (UI hazır) */}
<button
  onClick={() => {
    setActiveSort(tempSort);
    setCurrentPage(1);
  }}
  className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
>
  Filter
</button>

        </div>
      </div>

      {/* PRODUCTS */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            : "flex flex-col gap-6"
        }
      >
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className={
              view === "grid"
                ? "text-center"
                : "flex gap-6 items-center border p-4 rounded"
            }
          >
            <img
              src={product.image}
              alt={product.title}
              className={
                view === "grid"
                  ? "w-full mb-3"
                  : "w-40 h-40 object-cover"
              }
            />

            <div>
              <h4 className="font-medium">{product.title}</h4>
              <p className="text-sm text-gray-500">
                {product.category}
              </p>

              <p className="mt-2 font-semibold">
                <span className="text-green-500">
                  ${product.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          onClick={() => setCurrentPage(1)}
          className="px-3 py-1 border rounded"
        >
          First
        </button>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.max(prev - 1, 1))
          }
          className="px-3 py-1 border rounded"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 border text-sm ${
                currentPage === page
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, totalPages)
            )
          }
          className="px-3 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </main>
  );
}

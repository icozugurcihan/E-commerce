import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Bestseller from "../components/Bestseller";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  return (
    <main className="px-6 lg:px-20 py-10">
      {/* TOP */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded"
          />

          <div className="flex gap-3 mt-4">
            {product.gallery?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-20 h-20 object-cover border"
              />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            {product.title}
          </h2>

          <div className="flex items-center gap-2 text-sm mb-3">
            ⭐⭐⭐⭐⭐
            <span className="text-gray-500">(10 Reviews)</span>
          </div>

          <p className="text-2xl font-bold mb-4">
            ${product.price}
          </p>

          <p className="text-sm text-gray-600 mb-4">
            Availability:{" "}
            <span className="text-green-500">In Stock</span>
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          {/* COLORS */}
          <div className="flex gap-2 mb-6">
            {product.colors?.map((color, i) => (
              <span
                key={i}
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              Select Options
            </button>

            <button className="border px-3 py-2 rounded">♡</button>
            <button className="border px-3 py-2 rounded">🛒</button>
          </div>
        </div>
      </div>

      {/* TABS */}
{/* TABS */}
    <div className="mt-16 border-t pt-8">
    <div className="flex justify-center">
     <div className="flex gap-10 text-sm font-medium text-gray-600">
         <button className="text-gray-900 border-b-2 border-blue-500 pb-2">
          Description
        </button>
        <button className="hover:text-gray-900">
          Additional Information
        </button>
        <button className="hover:text-gray-900">
         Reviews (0)
         </button>
        </div>
    </div>
    </div>

        {/* DESCRIPTION SECTION */}
<section className="mt-20">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

    {/* LEFT IMAGE */}
    <div>
      <img
        src={product.image}
        alt={product.title}
        className="w-full rounded"
      />
    </div>

    {/* MIDDLE TEXT */}
    <div className="text-sm text-gray-600 leading-relaxed space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        the quick fox jumps over
      </h3>

      <p>
        Met minim Mollie non desert Alamo est sit cliquey dolor do
        met sent. RELIT official consequent door ENIM RELIT Mollie.
        Excitation venial consequent sent nostrum met.
      </p>

      <p>
        Met minim Mollie non desert Alamo est sit cliquey dolor do
        met sent. RELIT official consequent door ENIM RELIT Mollie.
        Excitation venial consequent sent nostrum met.
      </p>

      <p>
        Met minim Mollie non desert Alamo est sit cliquey dolor do
        met sent. RELIT official consequent door ENIM RELIT Mollie.
        Excitation venial consequent sent nostrum met.
      </p>
    </div>

    {/* RIGHT LIST */}
    <div className="text-sm text-gray-600 space-y-6">
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">
          the quick fox jumps over
        </h4>
        <ul className="space-y-2">
          <li>› the quick fox jumps over the lazy dog</li>
          <li>› the quick fox jumps over the lazy dog</li>
          <li>› the quick fox jumps over the lazy dog</li>
          <li>› the quick fox jumps over the lazy dog</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-3">
          the quick fox jumps over
        </h4>
        <ul className="space-y-2">
          <li>› the quick fox jumps over the lazy dog</li>
          <li>› the quick fox jumps over the lazy dog</li>
          <li>› the quick fox jumps over the lazy dog</li>
        </ul>
      </div>
    </div>

  </div>
</section>
       
      {/* BESTSELLER PRODUCTS */}
    <Bestseller />

    </main>
  );
}

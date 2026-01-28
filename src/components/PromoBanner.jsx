import promoImg from "../assets/promo-2.png";

export default function PromoBanner() {
  return (
    <section className="flex justify-center w-full px-4 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-[1200px] w-full">

        {/* LEFT IMAGE */}
        <div className="flex w-full lg:w-1/2">
          <img
            src={promoImg}
            alt="Promo"
            className="w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col w-full lg:w-1/2 gap-6">

          <p className="text-xs tracking-widest text-gray-400">
            SUMMER 2020
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            Part of the Neural <br />
            Universe
          </h2>

          <p className="text-sm text-gray-500 max-w-md">
            We know how large objects will act,
            but things on a small scale.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-green-500 text-white font-semibold">
              BUY NOW
            </button>

            <button className="px-6 py-3 border border-green-500 text-green-500 font-semibold">
              READ MORE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

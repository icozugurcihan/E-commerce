import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import promoImg from "../assets/hero-2.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SliderPromo() {
  return (
    <section className="flex w-full">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-[500px] lg:h-[700px]"
      >
        <SwiperSlide className="h-full">
          <div className="relative flex h-full w-full bg-emerald-700 text-white">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center gap-6 px-6 lg:px-24 w-full lg:w-1/2">

              <p className="text-sm tracking-widest">
                SUMMER 2020
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold">
                Vita Classic <br /> Product
              </h2>

              <p className="max-w-md text-sm opacity-90">
                We know how large objects will act, We know how are objects will act, We know
              </p>

              <div className="flex items-center gap-6">
                <span className="text-xl font-bold">$16.48</span>

                <button className="px-6 py-3 bg-green-500 font-semibold">
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:flex items-end justify-end w-1/2 pr-24">
              <img
                src={promoImg}
                alt="Vita Classic Product"
                className="h-[90%] object-contain"
              />
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

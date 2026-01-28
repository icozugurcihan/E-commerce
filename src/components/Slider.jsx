import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import heroImage from "../assets/hero-1.jpg";
import heroImage2 from "../assets/hero-2.png";

import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="flex w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        loop
        className="w-full h-[520px] lg:h-[650px]"   // 🔴 KRİTİK
      >
        {/* SLIDE 1 */}
        <SwiperSlide className="h-full">           {/* 🔴 KRİTİK */}
          <div
            className="
              flex flex-col justify-center
              h-full w-full
              px-6 lg:px-24
              text-white
              bg-cover bg-center bg-no-repeat
            "
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <p className="text-sm mb-2">SUMMER 2026</p>

            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              NEW COLLECTION
            </h2>
            <p className="text-xl mb-8">We know how large objects will act, <br/>
              but things on a small scale.</p>
            <button className="w-fit px-8 py-3 bg-white text-cyan-600 font-semibold">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide className="h-full">
          <div
            className="
              flex flex-col justify-center
              h-full w-full
              px-6 lg:px-24
              text-white
              bg-right bg-emerald-600 bg-no-repeat
            "
            style={{ backgroundImage: `url(${heroImage2})` }}
          >
            <p className="text-m mb-2 text-white-600 pl-4">SUMMER 2026</p>

            <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-white-600 mt-8 p-4">
              VITA CLASSIC <br/> Product
            </h2>
            <p className=" mt-8 text-white-600 p-4">We know how large objects will act, <br/>we know how are objects will act, We know </p>
            <button className="w-fit mt-8 px-8 py-3 bg-cyan text-white-600 font-semibold">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

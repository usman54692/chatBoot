import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const App = () => {
  return (
    <div className="container max-w-6xl md:px-4 px-2">
      <Swiper
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {[...Array(4)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-400 w-full min-h-[400px]"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default App;

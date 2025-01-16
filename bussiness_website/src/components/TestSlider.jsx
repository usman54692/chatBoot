import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const ReviewsSlider = () => {
  const reviews = [
    {
      name: "John Doe",
      review: "This is the best service I’ve ever used. Highly recommend it!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "Excellent customer support, very quick and efficient. Will use again.",
      rating: 4,
    },
    {
      name: "Mark Wilson",
      review: "Great experience, but I think there’s room for improvement in communication.",
      rating: 4,
    },
    {
      name: "Emily Davis",
      review: "Totally satisfied with the service! Everything was handled professionally.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full p-6 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
      
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold mb-3">{review.name}</p>
              <p className="text-gray-300 mb-3">"{review.review}"</p>
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-5.878 3.09 1.136-6.623L.823 6.91l6.721-.979L10 0l2.456 5.931 6.72.978-4.434 4.557 1.136 6.623L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsSlider;

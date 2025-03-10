"use client";
import { ComponentProps } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Testimonial, TestimonialProps } from "./Testimonial";

export interface TestimonialCarouselProps extends ComponentProps<"div"> {
  testimonials: TestimonialProps[];
  autoplay?: boolean;
}

const TestimonialCarousel = ({
  testimonials,
  autoplay = false,
  ...props
}: TestimonialCarouselProps) => {
  return (
    <div {...props}>
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        className="[&_.swiper-pagination-bullets]:!static [&_.swiper-pagination-bullets]:mt-3 [&_.swiper-pagination-bullets]:space-x-1"
        pagination={{
          bulletActiveClass: "w-7 rounded-[40px] !bg-primary",
          bulletClass:
            "cursor-pointer inline-block size-3 bg-secondary opacity-100 rounded-full",
          clickable: true
        }}
        autoplay={autoplay}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Testimonial {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { TestimonialCarousel };

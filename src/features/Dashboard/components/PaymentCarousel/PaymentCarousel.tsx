"use client";
import {
  PaymentCard,
  PaymentCardProps
} from "@/components/PaymentCard/PaymentCard";
import { ComponentProps } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface PaymentCarouselProps extends ComponentProps<"div"> {
  payments: PaymentCardProps[];
  autoplay?: boolean;
}

const PaymentCarousel = ({
  autoplay = false,
  payments,
  ...props
}: PaymentCarouselProps) => {
  return (
    <div {...props}>
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        className="[&_.swiper-pagination-bullets]:!static [&_.swiper-pagination-bullets]:mt-4 [&_.swiper-pagination-bullets]:space-x-1"
        pagination={{
          bulletActiveClass: "w-7 rounded-[40px] !bg-primary",
          bulletClass:
            "cursor-pointer inline-block size-2 bg-payment-card-carousel opacity-100 rounded-full",
          clickable: true
        }}
        autoplay={autoplay}
      >
        {payments.map((payment, index) => (
          <SwiperSlide key={index}>
            <PaymentCard {...payment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { PaymentCarousel };

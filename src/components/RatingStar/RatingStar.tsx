import React, { ComponentProps } from "react";
import RatingStarIcon from "@/assets/images/rating-star.svg";
import { cn } from "@/libs/class-names";

export interface RatingStarProps extends ComponentProps<"div"> {
  rating: number;
  totalRating?: number;
}

const RatingStar = ({
  rating,
  totalRating = 5,
  className,
  ...props
}: RatingStarProps) => {
  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      {Array.from({ length: Math.min(rating, totalRating) }, (_, index) => (
        <RatingStarIcon key={index} className={cn("size-6")} />
      ))}
    </div>
  );
};

export { RatingStar };

import { RatingStar } from "@/components/RatingStar/RatingStar";
import { cn } from "@/libs/class-names";
import { ComponentProps } from "react";

export interface TestimonialProps extends ComponentProps<"figure"> {
  rating: number;
  message: string;
  author: {
    name: string;
    location: string;
  };
}

const Testimonial = ({
  className,
  rating,
  message,
  author,
  ...props
}: TestimonialProps) => {
  return (
    <figure className={cn("space-y-4", className)} {...props}>
      <RatingStar rating={rating} />
      <blockquote>
        <p className="text-[36px]/[44px] font-bold">{message}</p>
      </blockquote>
      <figcaption className="flex flex-col gap-1 text-xl/[28px] font-bold text-primary">
        <span>{author.name}</span>
        <span className="text-base">{author.location}</span>
      </figcaption>
    </figure>
  );
};

export { Testimonial };

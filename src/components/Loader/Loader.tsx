import { cn } from "@/libs/class-names";
import { ComponentProps } from "react";

const Loader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-100 flex items-center justify-center bg-background text-white",
        className
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="size-20 animate-pulse duration-1000"
        fill="none"
      >
        <g clipPath="url(#a)">
          <path
            fill="#6359E9"
            fillRule="evenodd"
            d="M23.808 9.693a.91.91 0 0 1 .78.245 12.193 12.193 0 0 1 3.728 8.81c0 6.778-5.515 12.294-12.294 12.294-5.607 0-10.5-3.797-11.896-9.233a12.344 12.344 0 0 1-.398-3.062c0-1.965.458-3.853 1.364-5.613A12.39 12.39 0 0 1 9.095 8.6l.007-.005.02-.015.08-.058A10.441 10.441 0 0 0 13.553.838a.91.91 0 0 1 1.325-.736A12.304 12.304 0 0 1 21.14 7.96c.265 1.03.4 2.06.4 3.062 0 .522-.035 1.042-.102 1.56a10.478 10.478 0 0 0 1.708-2.408.91.91 0 0 1 .662-.481Zm-8.256 12.883a3.763 3.763 0 1 0 0-7.526 3.763 3.763 0 0 0 0 7.526Z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M.5 0h31.042v31.042H.5z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export { Loader };

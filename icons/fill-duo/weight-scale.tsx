import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WeightScale({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M10.0759 7.07791C10.4471 7.26177 10.5989 7.71171 10.4151 8.08288L9.67207 9.58288C9.48821 9.95406 9.03827 10.1059 8.6671 9.92205C8.29593 9.7382 8.14407 9.28826 8.32793 8.91708L9.07093 7.41708C9.25478 7.04591 9.70472 6.89406 10.0759 7.07791Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M2 4.75C2 3.23122 3.23122 2 4.75 2H13.25C14.7688 2 16 3.23122 16 4.75V13.25C16 14.7688 14.7688 16 13.25 16H4.75C3.23122 16 2 14.7688 2 13.25V4.75ZM10.4151 8.08288C10.5989 7.71171 10.4471 7.26177 10.0759 7.07791C9.70472 6.89406 9.25478 7.04591 9.07093 7.41708L8.32793 8.91708C8.14407 9.28826 8.29593 9.7382 8.6671 9.92205C9.03827 10.1059 9.48821 9.95406 9.67207 9.58288L10.4151 8.08288Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 4C6.23865 4 4 6.19795 4 8.90909V9.18182C4 9.63369 4.3731 10 4.83333 10H8.98448C8.87751 9.99786 8.76932 9.97269 8.6671 9.92205C8.29593 9.7382 8.14407 9.28826 8.32793 8.91708L9.07093 7.41708C9.25478 7.04591 9.70472 6.89406 10.0759 7.07791C10.4471 7.26177 10.5989 7.71171 10.4151 8.08288L9.67207 9.58288C9.54357 9.8423 9.2851 9.99458 9.01438 10H13.1667C13.6269 10 14 9.63369 14 9.18182V8.90909C14 6.19795 11.7613 4 9 4Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WeightScale;

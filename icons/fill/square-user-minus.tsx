import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareUserMinus({
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
          d="M13.8322 15.9388C13.6446 15.9792 13.4498 16.0005 13.25 16.0005H4.75001C4.55021 16.0005 4.3554 15.9792 4.16772 15.9388L4.40036 15.0608C4.9285 13.0139 6.78641 11.5005 8.99998 11.5005C11.2135 11.5005 13.0715 13.0139 13.5996 15.0608L13.8322 15.9388Z"
          fill={secondaryfill}
        />
        <path
          d="M6.74811 7.75049C6.74811 6.50742 7.75552 5.50049 8.99811 5.50049C10.2407 5.50049 11.2481 6.50742 11.2481 7.75049C11.2481 8.99356 10.2407 10.0005 8.99811 10.0005C7.75552 10.0005 6.74811 8.99356 6.74811 7.75049Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M17.25 4H12.25C11.836 4 11.5 3.664 11.5 3.25C11.5 2.836 11.836 2.5 12.25 2.5H17.25C17.664 2.5 18 2.836 18 3.25C18 3.664 17.664 4 17.25 4Z"
          fill={secondaryfill}
        />
        <path
          d="M2 4.75049C2 3.23128 3.23079 2.00049 4.75 2.00049H9.3004C9.71461 2.00049 10.0504 2.33627 10.0504 2.75049C10.0504 3.1647 9.71461 3.50049 9.3004 3.50049H4.75C4.05921 3.50049 3.5 4.0597 3.5 4.75049V13.2505C3.5 13.9413 4.05921 14.5005 4.75 14.5005H13.25C13.9408 14.5005 14.5 13.9413 14.5 13.2505V6.25049C14.5 5.83627 14.8358 5.50049 15.25 5.50049C15.6642 5.50049 16 5.83627 16 6.25049V13.2505C16 14.7697 14.7692 16.0005 13.25 16.0005H4.75C3.23079 16.0005 2 14.7697 2 13.2505V4.75049Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareUserMinus;

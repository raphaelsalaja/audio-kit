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
          d="M10.3789 2.0005C10.1396 2.35803 10 2.78796 10 3.25049C10 4.49313 11.0074 5.50049 12.25 5.50049H16V13.2505C16 14.7697 14.7692 16.0005 13.25 16.0005H4.75C3.23079 16.0005 2 14.7697 2 13.2505V4.7505C2 3.23129 3.23079 2.0005 4.75 2.0005H10.3789Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.8322 15.9388C13.6446 15.9792 13.4498 16.0005 13.25 16.0005H4.75001C4.55021 16.0005 4.3554 15.9792 4.16772 15.9388L4.40036 15.0609C4.9285 13.014 6.78641 11.5005 8.99998 11.5005C11.2135 11.5005 13.0715 13.0139 13.5996 15.0608L13.8322 15.9388Z"
          fill={fill}
        />
        <path
          d="M6.74811 7.75049C6.74811 6.50742 7.75552 5.50049 8.99811 5.50049C10.2407 5.50049 11.2481 6.50742 11.2481 7.75049C11.2481 8.99356 10.2407 10.0005 8.99811 10.0005C7.75552 10.0005 6.74811 8.99356 6.74811 7.75049Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 3.25049C11.5 2.83627 11.8358 2.50049 12.25 2.50049H17.25C17.6642 2.50049 18 2.83627 18 3.25049C18 3.6647 17.6642 4.00049 17.25 4.00049H12.25C11.8358 4.00049 11.5 3.6647 11.5 3.25049Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareUserMinus;

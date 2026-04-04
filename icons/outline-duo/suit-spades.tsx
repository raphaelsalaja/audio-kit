import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitSpades({
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
          d="M9.00002 10.621C10.454 12.239 12.357 12.821 13.705 11.586C14.988 10.411 14.63 8.56 13.256 7.177C11.882 5.794 9.00002 4.49 9.00002 1.75C9.00002 4.489 6.11902 5.794 4.74402 7.177C3.36902 8.56 3.01202 10.411 4.29502 11.586C5.64302 12.821 7.54602 12.238 9.00002 10.621Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 10.75C9 13.928 11.584 15.792 13.75 16.25H9H4.25C6.416 15.792 9 13.928 9 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.00002 10.621C10.454 12.239 12.357 12.821 13.705 11.586C14.988 10.411 14.63 8.56 13.256 7.177C11.882 5.794 9.00002 4.49 9.00002 1.75C9.00002 4.489 6.11902 5.794 4.74402 7.177C3.36902 8.56 3.01202 10.411 4.29502 11.586C5.64302 12.821 7.54602 12.238 9.00002 10.621Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SuitSpades;

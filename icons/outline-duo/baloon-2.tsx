import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Baloon2({
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
          d="M9 14.25C12.0376 14.25 14.5 11.4518 14.5 8C14.5 4.5482 12.0376 1.75 9 1.75C5.9624 1.75 3.5 4.5482 3.5 8C3.5 11.4518 5.9624 14.25 9 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.854 15.74L9.35399 14.24C9.15899 14.045 8.84199 14.045 8.64699 14.24L7.14699 15.74C7.03399 15.853 6.98199 16.012 7.00599 16.17C7.02999 16.327 7.12799 16.464 7.26899 16.537C7.85899 16.845 8.43699 16.998 9.01199 16.998C9.58699 16.998 10.16 16.843 10.736 16.534C10.876 16.459 10.971 16.323 10.994 16.166C11.017 16.01 10.966 15.852 10.854 15.74Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 14.25C12.0376 14.25 14.5 11.4518 14.5 8C14.5 4.5482 12.0376 1.75 9 1.75C5.9624 1.75 3.5 4.5482 3.5 8C3.5 11.4518 5.9624 14.25 9 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 8C6.5 6.2383 7.645 4.75 9 4.75"
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

export default Baloon2;

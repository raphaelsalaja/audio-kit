import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallEatingDots({
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
          d="M0.5 9C0.5 4.58179 4.08179 1 8.5 1C11.1197 1 13.4363 2.26465 14.8936 4.20451C15.0132 4.36363 15.0646 4.56375 15.0365 4.76078C15.0084 4.95782 14.9032 5.13562 14.744 5.25502L9.7501 9L14.744 12.745C14.9032 12.8644 15.0084 13.0422 15.0365 13.2392C15.0646 13.4363 15.0132 13.6364 14.8936 13.7955C13.4363 15.7354 11.1197 17 8.5 17C4.08179 17 0.5 13.4182 0.5 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.5 10C14.0523 10 14.5 9.5523 14.5 9C14.5 8.4477 14.0523 8 13.5 8C12.9477 8 12.5 8.4477 12.5 9C12.5 9.5523 12.9477 10 13.5 10Z"
          fill={fill}
        />
        <path
          d="M8.5 6C9.0523 6 9.5 5.5523 9.5 5C9.5 4.4477 9.0523 4 8.5 4C7.9477 4 7.5 4.4477 7.5 5C7.5 5.5523 7.9477 6 8.5 6Z"
          fill={fill}
        />
        <path
          d="M17 10C17.5523 10 18 9.5523 18 9C18 8.4477 17.5523 8 17 8C16.4477 8 16 8.4477 16 9C16 9.5523 16.4477 10 17 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BallEatingDots;

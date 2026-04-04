import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlaneSlash({
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
          d="M7.25 10.358L1.25 11.25V9.67599C1.25 9.26799 1.498 8.89999 1.877 8.74799L7.25 6.59399"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 10.396L16.75 11.25V9.676C16.75 9.268 16.502 8.9 16.123 8.748L14.253 7.98911"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.6582 14.584L7.84401 15.763C7.93401 16.332 8.424 16.751 9 16.751C9.576 16.751 10.066 16.332 10.156 15.763L10.628 12.776C10.709 12.26 10.75 11.739 10.75 11.216V10.396"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 7.25V3.5C10.75 2.534 9.966 1.75 9 1.75C8.034 1.75 7.25 2.534 7.25 3.5V10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.156 15.762L10.513 13.502L13.415 14.834C13.772 14.998 14 15.354 14 15.746V16.502C14 16.798 13.744 17.028 13.45 16.998L9.55499 16.591C9.86299 16.421 10.098 16.13 10.156 15.762Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.84398 15.762L7.12968 14.0513L4.25598 16.925C4.34298 16.975 4.44098 17.008 4.54998 16.997L8.44498 16.59C8.13698 16.42 7.90198 16.13 7.84398 15.762Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default PlaneSlash;

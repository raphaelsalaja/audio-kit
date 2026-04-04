import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallTennis({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1.00997 8.59699C1.27141 8.59699 1.53563 8.58538 1.79676 8.59784C3.56339 8.68218 5.35419 8.05015 6.70268 6.70166C8.04895 5.35539 8.598 3.62712 8.598 1.75999V1.00993C8.73117 1.00333 8.86519 1 9 1C9.37249 1 9.73904 1.02546 10.098 1.07473V1.74273C10.1954 3.9078 9.41737 6.10829 7.76334 7.76232C6.10849 9.41717 3.90901 10.1954 1.74355 10.097H1.07459C1.02541 9.73836 1 9.37215 1 9C1 8.86485 1.00335 8.73049 1.00997 8.59699Z"
          fill={fill}
        />
        <path
          d="M9.40302 16.99C9.26952 16.9966 9.13515 17 9 17C8.62786 17 8.26165 16.9746 7.90302 16.9254V16.2565C7.8046 14.0909 8.58389 11.8905 10.2377 10.2367C11.8917 8.58264 14.0922 7.80463 16.2573 7.902H16.9253C16.9745 8.26096 17 8.62751 17 9C17 9.1348 16.9967 9.26883 16.9901 9.402C16.7291 9.402 16.4653 9.41348 16.2046 9.40116C14.4375 9.3177 12.6457 9.94997 11.2983 11.2973C9.9508 12.6449 9.31783 14.4367 9.40217 16.2032C9.41463 16.4644 9.40302 16.7286 9.40302 16.99Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BallTennis;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bag({
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
          d="M3.2696 5.75H14.7304C15.2524 5.75 15.6864 6.151 15.7274 6.671L16.2344 13.092C16.3264 14.255 15.4074 15.249 14.2404 15.249H3.75969C2.59269 15.249 1.67369 14.255 1.76569 13.092L2.27269 6.671C2.31369 6.151 2.7476 5.75 3.2696 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 10H7.75C7.336 10 7 10.3358 7 10.75V11.25C7 11.6642 7.336 12 7.75 12H10.25C10.664 12 11 11.6642 11 11.25V10.75C11 10.3358 10.664 10 10.25 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M6.25 7.75V4.5C6.25 2.981 7.481 1.75 9 1.75C10.519 1.75 11.75 2.981 11.75 4.5V7.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Bag;

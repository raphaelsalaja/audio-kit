import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleUserPlus({
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
          d="M9 9.7505C10.105 9.7505 11 8.8555 11 7.7505C11 6.6455 10.105 5.7505 9 5.7505C7.895 5.7505 7 6.6455 7 7.7505C7 8.8555 7.895 9.7505 9 9.7505Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.15399 15.1475C5.63299 13.4745 7.17298 12.2505 8.99998 12.2505C10.827 12.2505 12.367 13.4745 12.846 15.1475"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 1.2505V6.2505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 3.7505H12.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.9619 1.82179C9.6465 1.77979 9.3271 1.7505 9 1.7505C4.996 1.7505 1.75 4.9966 1.75 9.0005C1.75 13.0044 4.996 16.2505 9 16.2505C13.004 16.2505 16.25 13.0044 16.25 9.0005C16.25 8.9483 16.2458 8.897 16.2448 8.845"
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

export default CircleUserPlus;

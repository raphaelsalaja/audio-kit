import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserSearch({
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
          d="M9 7.2505C10.519 7.2505 11.75 6.0195 11.75 4.5005C11.75 2.9815 10.519 1.7505 9 1.7505C7.481 1.7505 6.25 2.9815 6.25 4.5005C6.25 6.0195 7.481 7.2505 9 7.2505Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 15.2505C14.243 15.2505 15.25 14.2435 15.25 13.0005C15.25 11.7575 14.243 10.7505 13 10.7505C11.757 10.7505 10.75 11.7575 10.75 13.0005C10.75 14.2435 11.757 15.2505 13 15.2505Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.59 14.5905L16.25 16.2505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.90341 9.7578C6.39461 9.7964 4.24848 11.3086 3.29098 13.4704C2.92598 14.2954 3.378 15.2443 4.238 15.5153C5.4419 15.8947 7.032 16.2336 8.905 16.2453"
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

export default UserSearch;

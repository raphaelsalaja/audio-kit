import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Burger({
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
          d="M16.25 10.25C15.185 10.25 14.898 11.25 13.833 11.25C12.768 11.25 12.481 10.25 11.416 10.25C10.351 10.25 10.064 11.25 8.99899 11.25C7.93399 11.25 7.64699 10.25 6.58199 10.25C5.51699 10.25 5.22999 11.25 4.16499 11.25C3.09999 11.25 2.81299 10.25 1.74799 10.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 5.75C7.6642 5.75 8 5.4142 8 5C8 4.5858 7.6642 4.25 7.25 4.25C6.8358 4.25 6.5 4.5858 6.5 5C6.5 5.4142 6.8358 5.75 7.25 5.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.75 6.25C11.1642 6.25 11.5 5.9142 11.5 5.5C11.5 5.0858 11.1642 4.75 10.75 4.75C10.3358 4.75 10 5.0858 10 5.5C10 5.9142 10.3358 6.25 10.75 6.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.99998 7.75H14.898C15.222 7.75 15.462 7.451 15.386 7.135C15.065 5.799 13.905 2.75 9.99998 2.75H7.99998C4.09498 2.75 2.93498 5.8 2.61398 7.135C2.53798 7.451 2.77697 7.75 3.10197 7.75H8.99998Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8957 13.6097C14.6637 14.1855 13.9387 15.25 11.75 15.25H6.24999C4.06199 15.25 3.33679 14.1862 3.10449 13.6103"
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

export default Burger;

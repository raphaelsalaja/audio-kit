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
          d="M3.35156 12.9102C3.42978 13.2653 3.58828 15.25 6.25001 15.25H11.75C14.4135 15.25 14.6334 13.2418 14.7111 12.8882C13.6775 13.292 12.447 13.414 11.416 12.6552C11.0214 12.9456 10.1955 13.5 8.99899 13.5C7.80245 13.5 6.97658 12.9456 6.582 12.6552C5.55168 13.4135 4.509 13.4375 3.35156 12.9102Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9.00004 7.75H14.898C15.222 7.75 15.462 7.451 15.386 7.135C15.065 5.799 13.905 2.75 10 2.75H9.00004C8.69604 2.75 8.36304 2.75 8.00004 2.75C4.09504 2.75 2.93504 5.8 2.61404 7.135C2.53804 7.451 2.77704 7.75 3.10204 7.75H9.00004Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 10.25C15.185 10.25 14.898 11.25 13.833 11.25C12.768 11.25 12.481 10.25 11.416 10.25C10.351 10.25 10.064 11.25 8.99899 11.25C7.93399 11.25 7.64699 10.25 6.58199 10.25C5.51699 10.25 5.22999 11.25 4.16499 11.25C3.09999 11.25 2.81299 10.25 1.74799 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 5.75C7.66421 5.75 8 5.41421 8 5C8 4.58579 7.66421 4.25 7.25 4.25C6.83579 4.25 6.5 4.58579 6.5 5C6.5 5.41421 6.83579 5.75 7.25 5.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.75 6.25C11.1642 6.25 11.5 5.91421 11.5 5.5C11.5 5.08579 11.1642 4.75 10.75 4.75C10.3358 4.75 10 5.08579 10 5.5C10 5.91421 10.3358 6.25 10.75 6.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.00004 7.75H14.898C15.222 7.75 15.462 7.451 15.386 7.135C15.065 5.799 13.905 2.75 10 2.75H9.00004C8.69604 2.75 8.36304 2.75 8.00004 2.75C4.09504 2.75 2.93504 5.8 2.61404 7.135C2.53804 7.451 2.77704 7.75 3.10204 7.75H9.00004Z"
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

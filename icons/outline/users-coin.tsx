import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersCoin({
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
          d="M5.25 5.25C6.355 5.25 7.25 4.355 7.25 3.25C7.25 2.145 6.355 1.25 5.25 1.25C4.145 1.25 3.25 2.145 3.25 3.25C3.25 4.355 4.145 5.25 5.25 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.17689 12.3033C2.76069 12.2237 2.38399 12.1267 2.05099 12.026C1.56199 11.878 1.23299 11.391 1.34199 10.891C1.73499 9.09399 3.33499 7.74902 5.24999 7.74902C5.84989 7.74902 6.41909 7.88132 6.92999 8.11792"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8231 12.3033C15.2393 12.2237 15.616 12.1267 15.949 12.026C16.438 11.878 16.767 11.391 16.658 10.891C16.265 9.09399 14.665 7.74902 12.75 7.74902C12.1501 7.74902 11.5809 7.88132 11.07 8.11792"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 5.25C13.855 5.25 14.75 4.355 14.75 3.25C14.75 2.145 13.855 1.25 12.75 1.25C11.645 1.25 10.75 2.145 10.75 3.25C10.75 4.355 11.645 5.25 12.75 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.75C10.657 16.75 12 15.407 12 13.75C12 12.093 10.657 10.75 9 10.75C7.343 10.75 6 12.093 6 13.75C6 15.407 7.343 16.75 9 16.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13V14.5"
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

export default UsersCoin;

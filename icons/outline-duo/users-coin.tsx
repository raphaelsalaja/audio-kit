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
          d="M9 16.75C10.6569 16.75 12 15.407 12 13.75C12 12.093 10.6569 10.75 9 10.75C7.3431 10.75 6 12.093 6 13.75C6 15.407 7.3432 16.75 9 16.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 5.25C6.355 5.25 7.25 4.355 7.25 3.25C7.25 2.145 6.355 1.25 5.25 1.25C4.145 1.25 3.25 2.145 3.25 3.25C3.25 4.355 4.145 5.25 5.25 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.17686 12.3033C2.76066 12.2237 2.38396 12.1267 2.05096 12.026C1.56196 11.878 1.23296 11.391 1.34196 10.891C1.73496 9.09399 3.33496 7.74902 5.24996 7.74902C5.84986 7.74902 6.41906 7.88132 6.92996 8.11792"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.823 12.3033C15.2392 12.2237 15.6159 12.1267 15.9489 12.026C16.4379 11.878 16.7669 11.391 16.6579 10.891C16.2649 9.09399 14.6649 7.74902 12.7499 7.74902C12.15 7.74902 11.5808 7.88132 11.0699 8.11792"
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
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13V14.5"
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

export default UsersCoin;

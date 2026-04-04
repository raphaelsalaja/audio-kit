import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserList({
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
          d="M6.80701 7.25C8.04965 7.25 9.05701 6.24264 9.05701 5C9.05701 3.75736 8.04965 2.75 6.80701 2.75C5.56437 2.75 4.55701 3.75736 4.55701 5C4.55701 6.24264 5.56437 7.25 6.80701 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.80701 7.25C8.04965 7.25 9.05701 6.24264 9.05701 5C9.05701 3.75736 8.04965 2.75 6.80701 2.75C5.56437 2.75 4.55701 3.75736 4.55701 5C4.55701 6.24264 5.56437 7.25 6.80701 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.848 14.817C11.685 14.526 12.114 13.56 11.714 12.769C10.808 10.978 8.95301 9.74899 6.80801 9.74899C4.66301 9.74899 2.80801 10.977 1.90201 12.769C1.50201 13.56 1.93001 14.526 2.76801 14.817C3.79901 15.175 5.17601 15.5 6.80801 15.5C8.44001 15.5 9.81701 15.175 10.848 14.817Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 3.25H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 6.75H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 10.25H13.5"
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

export default UserList;

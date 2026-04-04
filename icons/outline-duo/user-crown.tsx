import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserCrown({
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
          d="M13 1L11.659 2.174C11.282 2.504 10.719 2.504 10.342 2.174L9.001 1L7.66 2.174C7.283 2.504 6.72 2.504 6.343 2.174L5.002 1L5.252 5.75C6.006 5.436 7.319 5 9.002 5C9.819 5 11.198 5.103 12.752 5.75L13.002 1H13Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 5.75V6.5C5.25 8.571 6.929 10.25 9 10.25C11.071 10.25 12.75 8.571 12.75 6.5V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.953 16C4.251 14.042 6.475 12.75 9 12.75C11.525 12.75 13.749 14.041 15.047 16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 1L11.659 2.174C11.282 2.504 10.719 2.504 10.342 2.174L9.001 1L7.66 2.174C7.283 2.504 6.72 2.504 6.343 2.174L5.002 1L5.252 5.75C6.006 5.436 7.319 5 9.002 5C9.819 5 11.198 5.103 12.752 5.75L13.002 1H13Z"
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

export default UserCrown;

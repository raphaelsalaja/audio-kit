import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonJumpingRope({
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
          d="M9 4.125C9.82843 4.125 10.5 3.45343 10.5 2.625C10.5 1.79657 9.82843 1.125 9 1.125C8.17157 1.125 7.5 1.79657 7.5 2.625C7.5 3.45343 8.17157 4.125 9 4.125Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.125C9.82843 4.125 10.5 3.45343 10.5 2.625C10.5 1.79657 9.82843 1.125 9 1.125C8.17157 1.125 7.5 1.79657 7.5 2.625C7.5 3.45343 8.17157 4.125 9 4.125Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 13.25V6.315"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 6.315V16.875"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 7.75001C14.428 7.65101 13.78 7.50001 13.082 7.27101C12.36 7.03301 11.727 6.75701 11.185 6.48201C10.895 6.33501 10.58 6.25101 10.254 6.25101H7.74499C7.41999 6.25101 7.10399 6.33501 6.81399 6.48201C6.27199 6.75701 5.63899 7.03401 4.91699 7.27101C4.21899 7.50101 3.57099 7.65101 2.99899 7.75001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 11.25H10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.238 16.2C5.423 15.827 3.25 13.417 3.25 10.5V10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 10V10.5C14.75 11.976 14.194 13.322 13.28 14.34"
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

export default PersonJumpingRope;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonBiking({
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
          d="M14 15.25C15.2426 15.25 16.25 14.243 16.25 13C16.25 11.757 15.2426 10.75 14 10.75C12.7574 10.75 11.75 11.757 11.75 13C11.75 14.243 12.7574 15.25 14 15.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 15.25C5.2426 15.25 6.25 14.243 6.25 13C6.25 11.757 5.2426 10.75 4 10.75C2.7574 10.75 1.75 11.757 1.75 13C1.75 14.243 2.7574 15.25 4 15.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 14.25L9.452 11.086C9.481 10.883 9.383 10.683 9.205 10.581L7.087 9.371C6.53 9.053 6.413 8.3 6.846 7.827L8.085 6.47601C8.454 6.07301 9.078 6.04099 9.487 6.40399L10.717 7.49701C10.9 7.66001 11.136 7.75 11.381 7.75H13.501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 5C11.5784 5 12.25 4.328 12.25 3.5C12.25 2.672 11.5784 2 10.75 2C9.9216 2 9.25 2.672 9.25 3.5C9.25 4.328 9.9216 5 10.75 5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default PersonBiking;

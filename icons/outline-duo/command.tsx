import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Command({
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
        <rect
          height="4.5"
          width="4.5"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
          x="6.75"
          y="6.75"
        />
        <path
          d="M11.25 6.75H6.75V11.25H11.25V6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 2.75C5.854 2.75 6.75 3.646 6.75 4.75V6.75H4.75C3.646 6.75 2.75 5.854 2.75 4.75C2.75 3.646 3.646 2.75 4.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 4.75C15.25 5.854 14.354 6.75 13.25 6.75H11.25V4.75C11.25 3.646 12.146 2.75 13.25 2.75C14.354 2.75 15.25 3.646 15.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 15.25C12.146 15.25 11.25 14.354 11.25 13.25V11.25H13.25C14.354 11.25 15.25 12.146 15.25 13.25C15.25 14.354 14.354 15.25 13.25 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 13.25C2.75 12.146 3.646 11.25 4.75 11.25H6.75V13.25C6.75 14.354 5.854 15.25 4.75 15.25C3.646 15.25 2.75 14.354 2.75 13.25Z"
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

export default Command;

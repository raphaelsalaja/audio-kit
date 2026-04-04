import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HighDefinition({
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
          d="M3.75 14.25L14.25 14.25C15.3546 14.25 16.25 13.3546 16.25 12.25V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75L3.75 3.75C2.64543 3.75 1.75 4.64543 1.75 5.75L1.75 12.25C1.75 13.3546 2.64543 14.25 3.75 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 14.25L14.25 14.25C15.3546 14.25 16.25 13.3546 16.25 12.25V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75L3.75 3.75C2.64543 3.75 1.75 4.64543 1.75 5.75L1.75 12.25C1.75 13.3546 2.64543 14.25 3.75 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.252 6.75H12.126C13.022 6.75 13.75 7.478 13.75 8.374V9.626C13.75 10.522 13.022 11.25 12.126 11.25H10.252V6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 11.25L4.253 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.74701 11.25L7.75001 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25201 9H7.74701"
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

export default HighDefinition;

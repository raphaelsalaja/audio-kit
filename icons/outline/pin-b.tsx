import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinB({
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
          d="M7.233 8H9.875C10.635 8 11.251 8.61701 11.25 9.37701C11.249 10.136 10.634 10.75 9.875 10.75H7.23199L7.23599 5.25H9.64101C10.4 5.25 11.016 5.866 11.016 6.625C11.016 7.384 10.4 8 9.64101 8"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C10.5833 15.75 15 12.25 15 7.75C15 4.438 12.3137 1.75 9 1.75C5.6863 1.75 3 4.438 3 7.75C3 12.25 7.4167 15.75 9 16.25Z"
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

export default PinB;

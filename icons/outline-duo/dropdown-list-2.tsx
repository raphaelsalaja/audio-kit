import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DropdownList2({
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
          d="M9.25 2.75H14.25C15.3546 2.75 16.25 3.64543 16.25 4.75V7.25C16.25 8.35457 15.3546 9.25 14.25 9.25H9.25V2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 12.25H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.25H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 5H11.5C11.342 5 11.198 5.089 11.127 5.23C11.057 5.371 11.072 5.54 11.166 5.666L12.416 7.333C12.495 7.438 12.618 7.5 12.749 7.5C12.88 7.5 13.004 7.438 13.082 7.333L14.332 5.666C14.427 5.54 14.442 5.371 14.371 5.23C14.3 5.089 14.156 5 13.998 5H14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.25 2.75V9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V7.25C1.75 8.35457 2.64543 9.25 3.75 9.25H14.25C15.3546 9.25 16.25 8.35457 16.25 7.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z"
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

export default DropdownList2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Armchair({
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
          d="M3.75 3.75V6.25L5.75 7.43623V10.1771H12.25V7.43623L14.25 6.25V3.75C14.25 2.645 13.355 1.75 12.25 1.75H5.75C4.645 1.75 3.75 2.645 3.75 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 8.25C16.25 7.146 15.355 6.25 14.25 6.25C13.145 6.25 12.25 7.146 12.25 8.25V10.25H5.75V8.25C5.75 7.146 4.855 6.25 3.75 6.25C2.645 6.25 1.75 7.146 1.75 8.25C1.75 8.988 2.155 9.626 2.75 9.973V12.25C2.75 13.354 3.645 14.25 4.75 14.25H13.25C14.355 14.25 15.25 13.354 15.25 12.25V9.973C15.845 9.627 16.25 8.989 16.25 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 6.25V3.75C3.75 2.645 4.645 1.75 5.75 1.75H12.25C13.355 1.75 14.25 2.645 14.25 3.75V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.25C16.25 7.146 15.355 6.25 14.25 6.25C13.145 6.25 12.25 7.146 12.25 8.25V10.25H5.75V8.25C5.75 7.146 4.855 6.25 3.75 6.25C2.645 6.25 1.75 7.146 1.75 8.25C1.75 8.988 2.155 9.626 2.75 9.973V12.25C2.75 13.354 3.645 14.25 4.75 14.25H13.25C14.355 14.25 15.25 13.354 15.25 12.25V9.973C15.845 9.627 16.25 8.989 16.25 8.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 14.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 14.25V16.25"
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

export default Armchair;

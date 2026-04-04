import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad4({
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
          d="M9 3.75V1.75H12.75C14.407 1.75 15.75 3.093 15.75 4.75V11.25C15.75 12.907 14.407 14.25 12.75 14.25H9"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.625 8.5C6.31536 8.5 6.875 7.94036 6.875 7.25C6.875 6.55964 6.31536 6 5.625 6C4.93464 6 4.375 6.55964 4.375 7.25C4.375 7.94036 4.93464 8.5 5.625 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 16.25H5.25C3.593 16.25 2.25 14.907 2.25 13.25V6.75C2.25 5.093 3.593 3.75 5.25 3.75H9V16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 14C5.16421 14 5.5 13.6642 5.5 13.25C5.5 12.8358 5.16421 12.5 4.75 12.5C4.33579 12.5 4 12.8358 4 13.25C4 13.6642 4.33579 14 4.75 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 12.5C6.66421 12.5 7 12.1642 7 11.75C7 11.3358 6.66421 11 6.25 11C5.83579 11 5.5 11.3358 5.5 11.75C5.5 12.1642 5.83579 12.5 6.25 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.375 12C13.0654 12 13.625 11.4404 13.625 10.75C13.625 10.0596 13.0654 9.5 12.375 9.5C11.6846 9.5 11.125 10.0596 11.125 10.75C11.125 11.4404 11.6846 12 12.375 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 3.75V1.75H12.75C14.407 1.75 15.75 3.093 15.75 4.75V11.25C15.75 12.907 14.407 14.25 12.75 14.25H9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 5.5C13.6642 5.5 14 5.16421 14 4.75C14 4.33579 13.6642 4 13.25 4C12.8358 4 12.5 4.33579 12.5 4.75C12.5 5.16421 12.8358 5.5 13.25 5.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.75 7C12.1642 7 12.5 6.66421 12.5 6.25C12.5 5.83579 12.1642 5.5 11.75 5.5C11.3358 5.5 11 5.83579 11 6.25C11 6.66421 11.3358 7 11.75 7Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Gamepad4;

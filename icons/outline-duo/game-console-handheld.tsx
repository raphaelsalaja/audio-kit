import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GameConsoleHandheld({
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
          d="M4.25 2.25H13.75C14.302 2.25 14.75 2.698 14.75 3.25V12.75C14.75 14.406 13.406 15.75 11.75 15.75H4.25C3.698 15.75 3.25 15.302 3.25 14.75V3.25C3.25 2.698 3.698 2.25 4.25 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 2.25H13.75C14.302 2.25 14.75 2.698 14.75 3.25V12.75C14.75 14.406 13.406 15.75 11.75 15.75H4.25C3.698 15.75 3.25 15.302 3.25 14.75V3.25C3.25 2.698 3.698 2.25 4.25 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 5.25H6.25V7.75H11.75V5.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 13.5C11.6642 13.5 12 13.1642 12 12.75C12 12.3358 11.6642 12 11.25 12C10.8358 12 10.5 12.3358 10.5 12.75C10.5 13.1642 10.8358 13.5 11.25 13.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 11.5C12.6642 11.5 13 11.1642 13 10.75C13 10.3358 12.6642 10 12.25 10C11.8358 10 11.5 10.3358 11.5 10.75C11.5 11.1642 11.8358 11.5 12.25 11.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.25 10.25V13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 11.75H5.75"
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

export default GameConsoleHandheld;

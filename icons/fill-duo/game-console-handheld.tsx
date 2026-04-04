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
          d="M2.5 3.25C2.5 2.28379 3.28379 1.5 4.25 1.5H13.75C14.7162 1.5 15.5 2.28379 15.5 3.25V12.75C15.5 14.8202 13.8202 16.5 11.75 16.5H4.25C3.28379 16.5 2.5 15.7162 2.5 14.75V3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.5 4.25C4.5 3.83579 4.83579 3.5 5.25 3.5H12.75C13.1642 3.5 13.5 3.83579 13.5 4.25V7.25C13.5 7.66421 13.1642 8 12.75 8H5.25C4.83579 8 4.5 7.66421 4.5 7.25V4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.25 13.5C11.6642 13.5 12 13.1642 12 12.75C12 12.3358 11.6642 12 11.25 12C10.8358 12 10.5 12.3358 10.5 12.75C10.5 13.1642 10.8358 13.5 11.25 13.5Z"
          fill={fill}
        />
        <path
          d="M12.25 11.5C12.6642 11.5 13 11.1642 13 10.75C13 10.3358 12.6642 10 12.25 10C11.8358 10 11.5 10.3358 11.5 10.75C11.5 11.1642 11.8358 11.5 12.25 11.5Z"
          fill={fill}
        />
        <path
          d="M8 10.25C8 9.83579 7.66421 9.5 7.25 9.5C6.83579 9.5 6.5 9.83579 6.5 10.25V11H5.75C5.33579 11 5 11.3358 5 11.75C5 12.1642 5.33579 12.5 5.75 12.5H6.5V13.25C6.5 13.6642 6.83579 14 7.25 14C7.66421 14 8 13.6642 8 13.25V12.5H8.75C9.16421 12.5 9.5 12.1642 9.5 11.75C9.5 11.3358 9.16421 11 8.75 11H8V10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GameConsoleHandheld;

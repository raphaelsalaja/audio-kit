import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BarcodeScan({
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
          d="M4.5 3.75C4.5 3.33579 4.83579 3 5.25 3H5.75C6.16421 3 6.5 3.33579 6.5 3.75V9C6.5 9.41421 6.16421 9.75 5.75 9.75H5.25C4.83579 9.75 4.5 9.41421 4.5 9V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 3.75C11 3.33579 11.3358 3 11.75 3H12.75C13.1642 3 13.5 3.33579 13.5 3.75V9C13.5 9.41421 13.1642 9.75 12.75 9.75H11.75C11.3358 9.75 11 9.41421 11 9V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.75 11.25C9.16421 11.25 9.5 11.5858 9.5 12V14.25C9.5 14.6642 9.16421 15 8.75 15C8.33579 15 8 14.6642 8 14.25V12C8 11.5858 8.33579 11.25 8.75 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.75 3C9.16421 3 9.5 3.33579 9.5 3.75V9C9.5 9.41421 9.16421 9.75 8.75 9.75C8.33579 9.75 8 9.41421 8 9V3.75C8 3.33579 8.33579 3 8.75 3Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.75 11.25C16.1642 11.25 16.5 11.5858 16.5 12V14.25C16.5 14.6642 16.1642 15 15.75 15C15.3358 15 15 14.6642 15 14.25V12C15 11.5858 15.3358 11.25 15.75 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.75 3C16.1642 3 16.5 3.33579 16.5 3.75V9C16.5 9.41421 16.1642 9.75 15.75 9.75C15.3358 9.75 15 9.41421 15 9V3.75C15 3.33579 15.3358 3 15.75 3Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.25 11.25C2.66421 11.25 3 11.5858 3 12V14.25C3 14.6642 2.66421 15 2.25 15C1.83579 15 1.5 14.6642 1.5 14.25V12C1.5 11.5858 1.83579 11.25 2.25 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.25 3C2.66421 3 3 3.33579 3 3.75V9C3 9.41421 2.66421 9.75 2.25 9.75C1.83579 9.75 1.5 9.41421 1.5 9V3.75C1.5 3.33579 1.83579 3 2.25 3Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H1C0.585786 9.75 0.25 9.41421 0.25 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BarcodeScan;

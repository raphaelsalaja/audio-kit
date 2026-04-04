import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjsGroup({
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
          d="M4.75 2C3.23079 2 2 3.23079 2 4.75V13.25C2 14.7692 3.23079 16 4.75 16H13.25C14.7692 16 16 14.7692 16 13.25V4.75C16 3.23079 14.7692 2 13.25 2H4.75ZM8.25 7.5C7.83579 7.5 7.5 7.83579 7.5 8.25V12.25C7.5 12.6642 7.83579 13 8.25 13H12.25C12.6642 13 13 12.6642 13 12.25V8.25C13 7.83579 12.6642 7.5 12.25 7.5H8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 5.75C5 5.33579 5.33579 5 5.75 5H9.75C10.1642 5 10.5 5.33579 10.5 5.75V9.75C10.5 10.1642 10.1642 10.5 9.75 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75V5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.5 8.25C7.5 7.83579 7.83579 7.5 8.25 7.5H12.25C12.6642 7.5 13 7.83579 13 8.25V12.25C13 12.6642 12.6642 13 12.25 13H8.25C7.83579 13 7.5 12.6642 7.5 12.25V8.25Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ObjsGroup;

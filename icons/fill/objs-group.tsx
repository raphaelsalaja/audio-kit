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
          d="M13.25 2H4.75C3.233 2 2 3.233 2 4.75V13.25C2 14.767 3.233 16 4.75 16H13.25C14.767 16 16 14.767 16 13.25V4.75C16 3.233 14.767 2 13.25 2ZM14.5 13.25C14.5 13.939 13.939 14.5 13.25 14.5H4.75C4.061 14.5 3.5 13.939 3.5 13.25V4.75C3.5 4.061 4.061 3.5 4.75 3.5H13.25C13.939 3.5 14.5 4.061 14.5 4.75V13.25Z"
          fill={fill}
        />
        <path
          d="M5 5.75C5 5.33579 5.33579 5 5.75 5H9.75C10.1642 5 10.5 5.33579 10.5 5.75V9.75C10.5 10.1642 10.1642 10.5 9.75 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75V5.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 7.5C12.6642 7.5 13 7.83579 13 8.25V12.25C13 12.6642 12.6642 13 12.25 13H8.25C7.83579 13 7.5 12.6642 7.5 12.25C7.5 11.8358 7.83579 11.5 8.25 11.5H11.5V8.25C11.5 7.83579 11.8358 7.5 12.25 7.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ObjsGroup;

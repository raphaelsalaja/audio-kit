import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Size({
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
          d="M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V6.25C16 6.66421 15.6642 7 15.25 7H7V15.25C7 15.6642 6.66421 16 6.25 16H4.75C3.23079 16 2 14.7692 2 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.25 12.5C15.6642 12.5 16 12.8358 16 13.25C16 14.7692 14.7692 16 13.25 16C12.8358 16 12.5 15.6642 12.5 15.25C12.5 14.8358 12.8358 14.5 13.25 14.5C13.9408 14.5 14.5 13.9408 14.5 13.25C14.5 12.8358 14.8358 12.5 15.25 12.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.5 15.25C8.5 14.8358 8.83579 14.5 9.25 14.5H10.75C11.1642 14.5 11.5 14.8358 11.5 15.25C11.5 15.6642 11.1642 16 10.75 16H9.25C8.83579 16 8.5 15.6642 8.5 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.25 8.5C15.6642 8.5 16 8.83579 16 9.25V10.75C16 11.1642 15.6642 11.5 15.25 11.5C14.8358 11.5 14.5 11.1642 14.5 10.75V9.25C14.5 8.83579 14.8358 8.5 15.25 8.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 12V13.5H5.25C4.83579 13.5 4.5 13.1642 4.5 12.75C4.5 12.3358 4.83579 12 5.25 12H7Z"
          fill={fill}
        />
        <path d="M7 2H4.75C3.23079 2 2 3.23079 2 4.75V7H7V2Z" fill={fill} />
        <path
          d="M13.5 7H12V5.25C12 4.83579 12.3358 4.5 12.75 4.5C13.1642 4.5 13.5 4.83579 13.5 5.25V7Z"
          fill={fill}
        />
        <path
          d="M10.5 7H9V5.25C9 4.83579 9.33579 4.5 9.75 4.5C10.1642 4.5 10.5 4.83579 10.5 5.25V7Z"
          fill={fill}
        />
        <path
          d="M7 9V10.5H5.25C4.83579 10.5 4.5 10.1642 4.5 9.75C4.5 9.33579 4.83579 9 5.25 9H7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Size;

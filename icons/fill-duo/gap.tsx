import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gap({
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
          d="M9 6C9.41421 6 9.75 6.33579 9.75 6.75V11.25C9.75 11.6642 9.41421 12 9 12C8.58579 12 8.25 11.6642 8.25 11.25V6.75C8.25 6.33579 8.58579 6 9 6Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6 9C6 8.58579 6.33579 8.25 6.75 8.25H11.25C11.6642 8.25 12 8.58579 12 9C12 9.41421 11.6642 9.75 11.25 9.75H6.75C6.33579 9.75 6 9.41421 6 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 1.5C6.66421 1.5 7 1.83579 7 2.25V3.75C7 5.26921 5.76921 6.5 4.25 6.5H2.25C1.83579 6.5 1.5 6.16421 1.5 5.75C1.5 5.33579 1.83579 5 2.25 5H4.25C4.94079 5 5.5 4.44079 5.5 3.75V2.25C5.5 1.83579 5.83579 1.5 6.25 1.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.75 1.5C12.1642 1.5 12.5 1.83579 12.5 2.25V3.75C12.5 4.44079 13.0592 5 13.75 5H15.75C16.1642 5 16.5 5.33579 16.5 5.75C16.5 6.16421 16.1642 6.5 15.75 6.5H13.75C12.2308 6.5 11 5.26921 11 3.75V2.25C11 1.83579 11.3358 1.5 11.75 1.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1.5 12.25C1.5 11.8358 1.83579 11.5 2.25 11.5H4.25C5.76921 11.5 7 12.7308 7 14.25V15.75C7 16.1642 6.66421 16.5 6.25 16.5C5.83579 16.5 5.5 16.1642 5.5 15.75V14.25C5.5 13.5592 4.94079 13 4.25 13H2.25C1.83579 13 1.5 12.6642 1.5 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 14.25C11 12.7308 12.2308 11.5 13.75 11.5H15.75C16.1642 11.5 16.5 11.8358 16.5 12.25C16.5 12.6642 16.1642 13 15.75 13H13.75C13.0592 13 12.5 13.5592 12.5 14.25V15.75C12.5 16.1642 12.1642 16.5 11.75 16.5C11.3358 16.5 11 16.1642 11 15.75V14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Gap;

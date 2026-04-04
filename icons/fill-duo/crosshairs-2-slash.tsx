import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crosshairs2Slash({
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
          d="M14.6569 3.34316C13.2092 1.89543 11.2092 1 9 1C4.58169 1 1 4.58169 1 9C1 11.2092 1.89543 13.2092 3.34316 14.6569L14.6569 3.34316Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.0206 5.16139L5.16138 16.0206C6.30088 16.645 7.60897 17 8.99998 17C13.4183 17 17 13.4183 17 9C17 7.60899 16.645 6.3009 16.0206 5.16139Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 1C9.41421 1 9.75 1.33579 9.75 1.75V4.25C9.75 4.66421 9.41421 5 9 5C8.58579 5 8.25 4.66421 8.25 4.25V1.75C8.25 1.33579 8.58579 1 9 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13 9C13 8.58579 13.3358 8.25 13.75 8.25H16.25C16.6642 8.25 17 8.58579 17 9C17 9.41421 16.6642 9.75 16.25 9.75H13.75C13.3358 9.75 13 9.41421 13 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 13C9.41421 13 9.75 13.3358 9.75 13.75V16.25C9.75 16.6642 9.41421 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25V13.75C8.25 13.3358 8.58579 13 9 13Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 9C1 8.58579 1.33579 8.25 1.75 8.25H4.25C4.66421 8.25 5 8.58579 5 9C5 9.41421 4.66421 9.75 4.25 9.75H1.75C1.33579 9.75 1 9.41421 1 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Crosshairs2Slash;

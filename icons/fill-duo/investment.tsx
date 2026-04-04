import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Investment({
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
          d="M9 1C6.79069 1 5 2.79069 5 5C5 7.20931 6.79069 9 9 9C11.2093 9 13 7.20931 13 5C13 2.79069 11.2093 1 9 1ZM9.75 4.25C9.75 3.83579 9.41421 3.5 9 3.5C8.58579 3.5 8.25 3.83579 8.25 4.25V5.75C8.25 6.16421 8.58579 6.5 9 6.5C9.41421 6.5 9.75 6.16421 9.75 5.75V4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5 10.25C16.5 13.1478 14.1478 15.5 11.25 15.5L9 15.5C8.58579 15.5 8.25 15.1642 8.25 14.75C8.25 11.8522 10.6022 9.5 13.5 9.5H15.75C16.1642 9.5 16.5 9.83579 16.5 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.25 15.5V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V15.5H8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1.5 10.25C1.5 9.83579 1.83579 9.5 2.25 9.5H4.5C7.39781 9.5 9.75 11.8522 9.75 14.75C9.75 15.1642 9.41421 15.5 9 15.5H6.75C3.85219 15.5 1.5 13.1478 1.5 10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Investment;

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
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9 14C9.41421 14 9.75 14.3358 9.75 14.75V16.25C9.75 16.6642 9.41421 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25V14.75C8.25 14.3358 8.58579 14 9 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.25 14.75C8.25 11.8522 10.3522 10 13.25 10H15.5C15.9142 10 16.25 10.3358 16.25 10.75C16.25 13.7397 13.6523 15.5078 11.25 15.5H9C8.58579 15.5 8.25 15.1642 8.25 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 14.75C9.75 11.8522 7.64781 10 4.75 10H2.5C2.08579 10 1.75 10.3358 1.75 10.75C1.75 13.7397 4.34766 15.5078 6.75 15.5H9C9.41421 15.5 9.75 15.1642 9.75 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Investment;

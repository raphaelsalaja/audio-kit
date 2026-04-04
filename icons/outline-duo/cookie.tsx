import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cookie({
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
          d="M14.75 8.00001C12.84 8.00001 11.281 6.56701 11.047 4.72001C10.948 4.73001 10.852 4.75001 10.75 4.75001C9.132 4.75001 7.822 3.46701 7.761 1.86301C4.348 2.45201 1.75 5.41901 1.75 9.00001C1.75 13.004 4.996 16.25 9 16.25C13.004 16.25 16.25 13.004 16.25 9.00001C16.25 8.56601 16.205 8.14301 16.132 7.72901C15.704 7.89901 15.239 8.00001 14.75 8.00001Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 8.00001C12.84 8.00001 11.281 6.56701 11.047 4.72001C10.948 4.73001 10.852 4.75001 10.75 4.75001C9.132 4.75001 7.822 3.46701 7.761 1.86301C4.348 2.45201 1.75 5.41901 1.75 9.00001C1.75 13.004 4.996 16.25 9 16.25C13.004 16.25 16.25 13.004 16.25 9.00001C16.25 8.56601 16.205 8.14301 16.132 7.72901C15.704 7.89901 15.239 8.00001 14.75 8.00001Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 2.5C12.6642 2.5 13 2.16421 13 1.75C13 1.33579 12.6642 1 12.25 1C11.8358 1 11.5 1.33579 11.5 1.75C11.5 2.16421 11.8358 2.5 12.25 2.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.75 5C15.1642 5 15.5 4.66421 15.5 4.25C15.5 3.83579 15.1642 3.5 14.75 3.5C14.3358 3.5 14 3.83579 14 4.25C14 4.66421 14.3358 5 14.75 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.25 12.5C11.6642 12.5 12 12.1642 12 11.75C12 11.3358 11.6642 11 11.25 11C10.8358 11 10.5 11.3358 10.5 11.75C10.5 12.1642 10.8358 12.5 11.25 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.25 12.5C7.94036 12.5 8.5 11.9404 8.5 11.25C8.5 10.5596 7.94036 10 7.25 10C6.55964 10 6 10.5596 6 11.25C6 11.9404 6.55964 12.5 7.25 12.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Cookie;

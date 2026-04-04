import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad5({
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
          d="M9.00001 11.25H11.752C12.285 11.25 12.796 11.463 13.171 11.841L15.563 14.25C15.563 14.25 17.308 13.91 16.951 11.335C16.594 8.76 14.881 4.797 14.881 4.797C14.452 3.93 13.859 3.75 11.65 3.75H8.99901H6.34801C4.13901 3.75 3.54601 3.929 3.11701 4.797C3.11701 4.797 1.40301 8.76 1.04701 11.335C0.691013 13.91 2.43501 14.25 2.43501 14.25L4.82701 11.841C5.20201 11.463 5.71301 11.25 6.24601 11.25H8.99801H9.00001Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.25 8.25C10.6642 8.25 11 7.91421 11 7.5C11 7.08579 10.6642 6.75 10.25 6.75C9.83579 6.75 9.5 7.08579 9.5 7.5C9.5 7.91421 9.83579 8.25 10.25 8.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.25 8.25C13.6642 8.25 14 7.91421 14 7.5C14 7.08579 13.6642 6.75 13.25 6.75C12.8358 6.75 12.5 7.08579 12.5 7.5C12.5 7.91421 12.8358 8.25 13.25 8.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.75 7C12.1642 7 12.5 6.66421 12.5 6.25C12.5 5.83579 12.1642 5.5 11.75 5.5C11.3358 5.5 11 5.83579 11 6.25C11 6.66421 11.3358 7 11.75 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.75 9.5C12.1642 9.5 12.5 9.16421 12.5 8.75C12.5 8.33579 12.1642 8 11.75 8C11.3358 8 11 8.33579 11 8.75C11 9.16421 11.3358 9.5 11.75 9.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6 8.5C6.55228 8.5 7 8.05228 7 7.5C7 6.94772 6.55228 6.5 6 6.5C5.44772 6.5 5 6.94772 5 7.5C5 8.05228 5.44772 8.5 6 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.00001 11.25H11.752C12.285 11.25 12.796 11.463 13.171 11.841L15.563 14.25C15.563 14.25 17.308 13.91 16.951 11.335C16.594 8.76 14.881 4.797 14.881 4.797C14.452 3.93 13.859 3.75 11.65 3.75H8.99901H6.34801C4.13901 3.75 3.54601 3.929 3.11701 4.797C3.11701 4.797 1.40301 8.76 1.04701 11.335C0.691013 13.91 2.43501 14.25 2.43501 14.25L4.82701 11.841C5.20201 11.463 5.71301 11.25 6.24601 11.25H8.99801H9.00001Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Gamepad5;

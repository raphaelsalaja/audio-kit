import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserMandalorian({
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
          d="M8.798 2.75501C6.77 2.86101 5.25 4.68101 5.25 6.71201V8.45101C5.25 8.79301 5.425 9.11101 5.713 9.29501L7.754 10.594C7.914 10.696 8.101 10.75 8.291 10.75H9.709C9.899 10.75 10.085 10.696 10.246 10.594L12.287 9.29501C12.575 9.11101 12.75 8.79301 12.75 8.45101V6.50001C12.75 4.36201 10.961 2.64201 8.798 2.75501Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 6.549V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.953 16C4.251 14.042 6.475 12.75 9 12.75C11.525 12.75 13.749 14.041 15.047 16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.798 2.75501C6.77 2.86101 5.25 4.68101 5.25 6.71201V8.45101C5.25 8.79301 5.425 9.11101 5.713 9.29501L7.754 10.594C7.914 10.696 8.101 10.75 8.291 10.75H9.709C9.899 10.75 10.085 10.696 10.246 10.594L12.287 9.29501C12.575 9.11101 12.75 8.79301 12.75 8.45101V6.50001C12.75 4.36201 10.961 2.64201 8.798 2.75501Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.297 6.09301C6.205 6.36501 7.474 6.63501 9 6.63501C10.539 6.63501 11.817 6.36001 12.727 6.08501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.75V6.63499"
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

export default UserMandalorian;

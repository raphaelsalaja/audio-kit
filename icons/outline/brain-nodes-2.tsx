import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BrainNodes2({
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
          d="M7.31 9.81L8.707 11.207C8.895 11.395 9 11.649 9 11.914V13.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.69 8.19L9.293 6.793C9.105 6.605 9 6.351 9 6.086V4.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.5C9 3.257 10.007 2.25 11.25 2.25C12.493 2.25 13.5 3.257 13.5 4.5C13.5 4.593 13.484 4.682 13.473 4.772C14.748 4.886 15.75 5.945 15.75 7.25C15.75 8.27 15.137 9.145 14.261 9.533C14.85 9.881 15.25 10.516 15.25 11.25C15.25 12.278 14.471 13.115 13.473 13.228C13.484 13.318 13.5 13.407 13.5 13.5C13.5 14.743 12.493 15.75 11.25 15.75C10.007 15.75 9 14.743 9 13.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.5C9 3.257 7.993 2.25 6.75 2.25C5.507 2.25 4.5 3.257 4.5 4.5C4.5 4.593 4.516 4.682 4.527 4.772C3.252 4.886 2.25 5.945 2.25 7.25C2.25 8.27 2.863 9.145 3.739 9.533C3.15 9.881 2.75 10.516 2.75 11.25C2.75 12.278 3.529 13.115 4.527 13.228C4.516 13.318 4.5 13.407 4.5 13.5C4.5 14.743 5.507 15.75 6.75 15.75C7.993 15.75 9 14.743 9 13.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 11C7.8284 11 8.5 10.3284 8.5 9.5C8.5 8.6716 7.8284 8 7 8C6.1716 8 5.5 8.6716 5.5 9.5C5.5 10.3284 6.1716 11 7 11Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11 10C11.8284 10 12.5 9.3284 12.5 8.5C12.5 7.6716 11.8284 7 11 7C10.1716 7 9.5 7.6716 9.5 8.5C9.5 9.3284 10.1716 10 11 10Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BrainNodes2;

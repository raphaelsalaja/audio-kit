import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierFaceGrin({
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
          d="M11.1083 11.1083C11.4012 10.8154 11.876 10.8154 12.1689 11.1083L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L11.1083 12.1689C10.8154 11.876 10.8154 11.4012 11.1083 11.1083Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7.75 1.5C4.29829 1.5 1.5 4.29829 1.5 7.75C1.5 11.2017 4.29829 14 7.75 14C11.2017 14 14 11.2017 14 7.75C14 4.29829 11.2017 1.5 7.75 1.5ZM6.5 7C6.5 7.5523 6.052 8 5.5 8C4.948 8 4.5 7.5523 4.5 7C4.5 6.4477 4.948 6 5.5 6C6.052 6 6.5 6.4477 6.5 7ZM10 8C10.552 8 11 7.5523 11 7C11 6.4477 10.552 6 10 6C9.448 6 9 6.4477 9 7C9 7.5523 9.448 8 10 8ZM8.9166 8.5H6.58331C6.26131 8.5 5.99991 8.7613 5.99991 9.0833C5.99991 10.0493 6.78391 10.8333 7.74991 10.8333C8.71591 10.8333 9.49991 10.0493 9.49991 9.0833C9.49991 8.7613 9.2386 8.5 8.9166 8.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MagnifierFaceGrin;

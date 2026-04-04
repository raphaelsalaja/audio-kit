import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookBookmark({
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
          d="M2.75 4.25C2.75 3.14543 3.64543 2.25 4.75 2.25H15.25V12.25H2.75V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 14V4.25C2.75 3.145 3.645 2.25 4.75 2.25H15.25V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 14H7V17.5C7 17.702 7.122 17.885 7.309 17.962C7.496 18.041 7.71 17.997 7.854 17.854L9 16.708L10.146 17.854C10.242 17.95 10.37 18 10.5 18C10.564 18 10.63 17.988 10.691 17.962C10.878 17.885 11 17.702 11 17.5V14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.25 15.75H4.5C3.534 15.75 2.75 14.967 2.75 14C2.75 13.033 3.534 12.25 4.5 12.25H15.25C14.609 13.094 14.516 14.797 15.25 15.75H12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 10.5C6.16421 10.5 6.5 10.1642 6.5 9.75C6.5 9.33579 6.16421 9 5.75 9C5.33579 9 5 9.33579 5 9.75C5 10.1642 5.33579 10.5 5.75 10.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.75 5.5C6.16421 5.5 6.5 5.16421 6.5 4.75C6.5 4.33579 6.16421 4 5.75 4C5.33579 4 5 4.33579 5 4.75C5 5.16421 5.33579 5.5 5.75 5.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.75 8C6.16421 8 6.5 7.66421 6.5 7.25C6.5 6.83579 6.16421 6.5 5.75 6.5C5.33579 6.5 5 6.83579 5 7.25C5 7.66421 5.33579 8 5.75 8Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BookBookmark;

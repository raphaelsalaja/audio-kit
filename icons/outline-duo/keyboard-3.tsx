import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard3({
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
          d="M5.75 8.5H5.25C4.83579 8.5 4.5 8.83579 4.5 9.25V9.75C4.5 10.1642 4.83579 10.5 5.25 10.5H5.75C6.16421 10.5 6.5 10.1642 6.5 9.75V9.25C6.5 8.83579 6.16421 8.5 5.75 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.25 8.5H1.75C1.33579 8.5 1 8.83579 1 9.25V9.75C1 10.1642 1.33579 10.5 1.75 10.5H2.25C2.66421 10.5 3 10.1642 3 9.75V9.25C3 8.83579 2.66421 8.5 2.25 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.25 8.5H8.75C8.33579 8.5 8 8.83579 8 9.25V9.75C8 10.1642 8.33579 10.5 8.75 10.5H9.25C9.66421 10.5 10 10.1642 10 9.75V9.25C10 8.83579 9.66421 8.5 9.25 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.75 8.5H12.25C11.8358 8.5 11.5 8.83579 11.5 9.25V9.75C11.5 10.1642 11.8358 10.5 12.25 10.5H12.75C13.1642 10.5 13.5 10.1642 13.5 9.75V9.25C13.5 8.83579 13.1642 8.5 12.75 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.5 5H7C6.58579 5 6.25 5.33579 6.25 5.75V6.25C6.25 6.66421 6.58579 7 7 7H7.5C7.91421 7 8.25 6.66421 8.25 6.25V5.75C8.25 5.33579 7.91421 5 7.5 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4 5H3.5C3.08579 5 2.75 5.33579 2.75 5.75V6.25C2.75 6.66421 3.08579 7 3.5 7H4C4.41421 7 4.75 6.66421 4.75 6.25V5.75C4.75 5.33579 4.41421 5 4 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11 5H10.5C10.0858 5 9.75 5.33579 9.75 5.75V6.25C9.75 6.66421 10.0858 7 10.5 7H11C11.4142 7 11.75 6.66421 11.75 6.25V5.75C11.75 5.33579 11.4142 5 11 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 5H14C13.5858 5 13.25 5.33579 13.25 5.75V6.25C13.25 6.66421 13.5858 7 14 7H14.5C14.9142 7 15.25 6.66421 15.25 6.25V5.75C15.25 5.33579 14.9142 5 14.5 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.25 8.5H15.75C15.3358 8.5 15 8.83579 15 9.25V9.75C15 10.1642 15.3358 10.5 15.75 10.5H16.25C16.6642 10.5 17 10.1642 17 9.75V9.25C17 8.83579 16.6642 8.5 16.25 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.5 12.75H13.5"
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

export default Keyboard3;

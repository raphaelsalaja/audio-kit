import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareGrid3({
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
          d="M13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.6 5H8.4C8.17909 5 8 5.17909 8 5.4V6.6C8 6.82091 8.17909 7 8.4 7H9.6C9.82091 7 10 6.82091 10 6.6V5.4C10 5.17909 9.82091 5 9.6 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.6 8H8.4C8.17909 8 8 8.17909 8 8.4V9.6C8 9.82091 8.17909 10 8.4 10H9.6C9.82091 10 10 9.82091 10 9.6V8.4C10 8.17909 9.82091 8 9.6 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.6 11H8.4C8.17909 11 8 11.1791 8 11.4V12.6C8 12.8209 8.17909 13 8.4 13H9.6C9.82091 13 10 12.8209 10 12.6V11.4C10 11.1791 9.82091 11 9.6 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.6 5H5.4C5.17909 5 5 5.17909 5 5.4V6.6C5 6.82091 5.17909 7 5.4 7H6.6C6.82091 7 7 6.82091 7 6.6V5.4C7 5.17909 6.82091 5 6.6 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.6 8H5.4C5.17909 8 5 8.17909 5 8.4V9.6C5 9.82091 5.17909 10 5.4 10H6.6C6.82091 10 7 9.82091 7 9.6V8.4C7 8.17909 6.82091 8 6.6 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.6 11H5.4C5.17909 11 5 11.1791 5 11.4V12.6C5 12.8209 5.17909 13 5.4 13H6.6C6.82091 13 7 12.8209 7 12.6V11.4C7 11.1791 6.82091 11 6.6 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.6 5H11.4C11.1791 5 11 5.17909 11 5.4V6.6C11 6.82091 11.1791 7 11.4 7H12.6C12.8209 7 13 6.82091 13 6.6V5.4C13 5.17909 12.8209 5 12.6 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.6 8H11.4C11.1791 8 11 8.17909 11 8.4V9.6C11 9.82091 11.1791 10 11.4 10H12.6C12.8209 10 13 9.82091 13 9.6V8.4C13 8.17909 12.8209 8 12.6 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.6 11H11.4C11.1791 11 11 11.1791 11 11.4V12.6C11 12.8209 11.1791 13 11.4 13H12.6C12.8209 13 13 12.8209 13 12.6V11.4C13 11.1791 12.8209 11 12.6 11Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SquareGrid3;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard4Mouse({
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
          d="M3.75 3.75H14.25C15.3546 3.75 16.25 4.64543 16.25 5.75V10.25C16.25 10.3347 16.2447 10.4181 16.2345 10.5C16.1115 9.51342 15.2699 8.75 14.25 8.75H13.25C12.1454 8.75 11.25 9.64543 11.25 10.75V12.25H3.75C2.64543 12.25 1.75 11.3546 1.75 10.25V5.75C1.75 4.64543 2.64543 3.75 3.75 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.75 12.25H3.75C2.645 12.25 1.75 11.355 1.75 10.25V5.75C1.75 4.645 2.645 3.75 3.75 3.75H14.25C15.355 3.75 16.25 4.645 16.25 5.75V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9.25H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.875 6H7.375C7.09886 6 6.875 6.22386 6.875 6.5V7C6.875 7.27614 7.09886 7.5 7.375 7.5H7.875C8.15114 7.5 8.375 7.27614 8.375 7V6.5C8.375 6.22386 8.15114 6 7.875 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.125 6H4.625C4.34886 6 4.125 6.22386 4.125 6.5V7C4.125 7.27614 4.34886 7.5 4.625 7.5H5.125C5.40114 7.5 5.625 7.27614 5.625 7V6.5C5.625 6.22386 5.40114 6 5.125 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.625 6H10.125C9.84886 6 9.625 6.22386 9.625 6.5V7C9.625 7.27614 9.84886 7.5 10.125 7.5H10.625C10.9011 7.5 11.125 7.27614 11.125 7V6.5C11.125 6.22386 10.9011 6 10.625 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.375 6H12.875C12.5989 6 12.375 6.22386 12.375 6.5V7C12.375 7.27614 12.5989 7.5 12.875 7.5H13.375C13.6511 7.5 13.875 7.27614 13.875 7V6.5C13.875 6.22386 13.6511 6 13.375 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 8.75H13.25C12.1454 8.75 11.25 9.64543 11.25 10.75V14.25C11.25 15.3546 12.1454 16.25 13.25 16.25H14.25C15.3546 16.25 16.25 15.3546 16.25 14.25V10.75C16.25 9.64543 15.3546 8.75 14.25 8.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 12.25V11.25"
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

export default Keyboard4Mouse;

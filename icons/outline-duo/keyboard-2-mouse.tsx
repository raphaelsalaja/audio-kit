import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard2Mouse({
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
          d="M3.75 2.75H14.25C15.3546 2.75 16.25 3.64543 16.25 4.75V11.25C16.25 11.3347 16.2447 11.4181 16.2345 11.5C16.1115 10.5134 15.2699 9.75 14.25 9.75H13.25C12.1454 9.75 11.25 10.6454 11.25 11.75V13.25H3.75C2.64543 13.25 1.75 12.3546 1.75 11.25V4.75C1.75 3.64543 2.64543 2.75 3.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9.008 10.25H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.875 7H7.375C7.09886 7 6.875 7.22386 6.875 7.5V8C6.875 8.27614 7.09886 8.5 7.375 8.5H7.875C8.15114 8.5 8.375 8.27614 8.375 8V7.5C8.375 7.22386 8.15114 7 7.875 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.125 7H4.625C4.34886 7 4.125 7.22386 4.125 7.5V8C4.125 8.27614 4.34886 8.5 4.625 8.5H5.125C5.40114 8.5 5.625 8.27614 5.625 8V7.5C5.625 7.22386 5.40114 7 5.125 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.625 7H10.125C9.84886 7 9.625 7.22386 9.625 7.5V8C9.625 8.27614 9.84886 8.5 10.125 8.5H10.625C10.9011 8.5 11.125 8.27614 11.125 8V7.5C11.125 7.22386 10.9011 7 10.625 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.375 7H12.875C12.5989 7 12.375 7.22386 12.375 7.5V8C12.375 8.27614 12.5989 8.5 12.875 8.5H13.375C13.6511 8.5 13.875 8.27614 13.875 8V7.5C13.875 7.22386 13.6511 7 13.375 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.5 5H6C5.72386 5 5.5 5.22386 5.5 5.5V6C5.5 6.27614 5.72386 6.5 6 6.5H6.5C6.77614 6.5 7 6.27614 7 6V5.5C7 5.22386 6.77614 5 6.5 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.25 5H8.75C8.47386 5 8.25 5.22386 8.25 5.5V6C8.25 6.27614 8.47386 6.5 8.75 6.5H9.25C9.52614 6.5 9.75 6.27614 9.75 6V5.5C9.75 5.22386 9.52614 5 9.25 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 5H11.5C11.2239 5 11 5.22386 11 5.5V6C11 6.27614 11.2239 6.5 11.5 6.5H12C12.2761 6.5 12.5 6.27614 12.5 6V5.5C12.5 5.22386 12.2761 5 12 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.25 7.74V4.75C16.25 3.646 15.355 2.75 14.25 2.75H3.75C2.645 2.75 1.75 3.646 1.75 4.75V11.25C1.75 12.354 2.645 13.25 3.75 13.25H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 9.75H13.25C12.1454 9.75 11.25 10.6454 11.25 11.75V15.25C11.25 16.3546 12.1454 17.25 13.25 17.25H14.25C15.3546 17.25 16.25 16.3546 16.25 15.25V11.75C16.25 10.6454 15.3546 9.75 14.25 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 13.25V12.25"
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

export default Keyboard2Mouse;

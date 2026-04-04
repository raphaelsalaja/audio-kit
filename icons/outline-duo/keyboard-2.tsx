import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard2({
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
          d="M14.25 3.75H3.75C2.64543 3.75 1.75 4.64543 1.75 5.75V12.25C1.75 13.3546 2.64543 14.25 3.75 14.25H14.25C15.3546 14.25 16.25 13.3546 16.25 12.25V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 3.75H3.75C2.64543 3.75 1.75 4.64543 1.75 5.75V12.25C1.75 13.3546 2.64543 14.25 3.75 14.25H14.25C15.3546 14.25 16.25 13.3546 16.25 12.25V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 11.25H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.875 8H7.375C7.09886 8 6.875 8.22386 6.875 8.5V9C6.875 9.27614 7.09886 9.5 7.375 9.5H7.875C8.15114 9.5 8.375 9.27614 8.375 9V8.5C8.375 8.22386 8.15114 8 7.875 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.125 8H4.625C4.34886 8 4.125 8.22386 4.125 8.5V9C4.125 9.27614 4.34886 9.5 4.625 9.5H5.125C5.40114 9.5 5.625 9.27614 5.625 9V8.5C5.625 8.22386 5.40114 8 5.125 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.625 8H10.125C9.84886 8 9.625 8.22386 9.625 8.5V9C9.625 9.27614 9.84886 9.5 10.125 9.5H10.625C10.9011 9.5 11.125 9.27614 11.125 9V8.5C11.125 8.22386 10.9011 8 10.625 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.375 8H12.875C12.5989 8 12.375 8.22386 12.375 8.5V9C12.375 9.27614 12.5989 9.5 12.875 9.5H13.375C13.6511 9.5 13.875 9.27614 13.875 9V8.5C13.875 8.22386 13.6511 8 13.375 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.5 6H6C5.72386 6 5.5 6.22386 5.5 6.5V7C5.5 7.27614 5.72386 7.5 6 7.5H6.5C6.77614 7.5 7 7.27614 7 7V6.5C7 6.22386 6.77614 6 6.5 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.25 6H8.75C8.47386 6 8.25 6.22386 8.25 6.5V7C8.25 7.27614 8.47386 7.5 8.75 7.5H9.25C9.52614 7.5 9.75 7.27614 9.75 7V6.5C9.75 6.22386 9.52614 6 9.25 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 6H11.5C11.2239 6 11 6.22386 11 6.5V7C11 7.27614 11.2239 7.5 11.5 7.5H12C12.2761 7.5 12.5 7.27614 12.5 7V6.5C12.5 6.22386 12.2761 6 12 6Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Keyboard2;

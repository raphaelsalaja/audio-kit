import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard2Cable({
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
          d="M14.25 4.75H3.75C2.64543 4.75 1.75 5.64543 1.75 6.75V13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V6.75C16.25 5.64543 15.3546 4.75 14.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.75V4C9 3.034 9.784 2.25 10.75 2.25H12.5C13.293 2.25 13.962 1.723 14.177 1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 4.75H3.75C2.64543 4.75 1.75 5.64543 1.75 6.75V13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V6.75C16.25 5.64543 15.3546 4.75 14.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 12.25H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.875 9H7.375C7.09886 9 6.875 9.22386 6.875 9.5V10C6.875 10.2761 7.09886 10.5 7.375 10.5H7.875C8.15114 10.5 8.375 10.2761 8.375 10V9.5C8.375 9.22386 8.15114 9 7.875 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.125 9H4.625C4.34886 9 4.125 9.22386 4.125 9.5V10C4.125 10.2761 4.34886 10.5 4.625 10.5H5.125C5.40114 10.5 5.625 10.2761 5.625 10V9.5C5.625 9.22386 5.40114 9 5.125 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.625 9H10.125C9.84886 9 9.625 9.22386 9.625 9.5V10C9.625 10.2761 9.84886 10.5 10.125 10.5H10.625C10.9011 10.5 11.125 10.2761 11.125 10V9.5C11.125 9.22386 10.9011 9 10.625 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.375 9H12.875C12.5989 9 12.375 9.22386 12.375 9.5V10C12.375 10.2761 12.5989 10.5 12.875 10.5H13.375C13.6511 10.5 13.875 10.2761 13.875 10V9.5C13.875 9.22386 13.6511 9 13.375 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.5 7H6C5.72386 7 5.5 7.22386 5.5 7.5V8C5.5 8.27614 5.72386 8.5 6 8.5H6.5C6.77614 8.5 7 8.27614 7 8V7.5C7 7.22386 6.77614 7 6.5 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.25 7H8.75C8.47386 7 8.25 7.22386 8.25 7.5V8C8.25 8.27614 8.47386 8.5 8.75 8.5H9.25C9.52614 8.5 9.75 8.27614 9.75 8V7.5C9.75 7.22386 9.52614 7 9.25 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 7H11.5C11.2239 7 11 7.22386 11 7.5V8C11 8.27614 11.2239 8.5 11.5 8.5H12C12.2761 8.5 12.5 8.27614 12.5 8V7.5C12.5 7.22386 12.2761 7 12 7Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Keyboard2Cable;

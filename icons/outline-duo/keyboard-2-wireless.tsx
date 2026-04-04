import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard2Wireless({
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
          d="M14.25 6.75H3.75C2.64543 6.75 1.75 7.64543 1.75 8.75V15.25C1.75 16.3546 2.64543 17.25 3.75 17.25H14.25C15.3546 17.25 16.25 16.3546 16.25 15.25V8.75C16.25 7.64543 15.3546 6.75 14.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 6.75H3.75C2.64543 6.75 1.75 7.64543 1.75 8.75V15.25C1.75 16.3546 2.64543 17.25 3.75 17.25H14.25C15.3546 17.25 16.25 16.3546 16.25 15.25V8.75C16.25 7.64543 15.3546 6.75 14.25 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 14.25H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.875 11H7.375C7.09886 11 6.875 11.2239 6.875 11.5V12C6.875 12.2761 7.09886 12.5 7.375 12.5H7.875C8.15114 12.5 8.375 12.2761 8.375 12V11.5C8.375 11.2239 8.15114 11 7.875 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.125 11H4.625C4.34886 11 4.125 11.2239 4.125 11.5V12C4.125 12.2761 4.34886 12.5 4.625 12.5H5.125C5.40114 12.5 5.625 12.2761 5.625 12V11.5C5.625 11.2239 5.40114 11 5.125 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.625 11H10.125C9.84886 11 9.625 11.2239 9.625 11.5V12C9.625 12.2761 9.84886 12.5 10.125 12.5H10.625C10.9011 12.5 11.125 12.2761 11.125 12V11.5C11.125 11.2239 10.9011 11 10.625 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.375 11H12.875C12.5989 11 12.375 11.2239 12.375 11.5V12C12.375 12.2761 12.5989 12.5 12.875 12.5H13.375C13.6511 12.5 13.875 12.2761 13.875 12V11.5C13.875 11.2239 13.6511 11 13.375 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.5 9H6C5.72386 9 5.5 9.22386 5.5 9.5V10C5.5 10.2761 5.72386 10.5 6 10.5H6.5C6.77614 10.5 7 10.2761 7 10V9.5C7 9.22386 6.77614 9 6.5 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.25 9H8.75C8.47386 9 8.25 9.22386 8.25 9.5V10C8.25 10.2761 8.47386 10.5 8.75 10.5H9.25C9.52614 10.5 9.75 10.2761 9.75 10V9.5C9.75 9.22386 9.52614 9 9.25 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 9H11.5C11.2239 9 11 9.22386 11 9.5V10C11 10.2761 11.2239 10.5 11.5 10.5H12C12.2761 10.5 12.5 10.2761 12.5 10V9.5C12.5 9.22386 12.2761 9 12 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.93903 4.189C8.52503 3.603 9.47503 3.603 10.06 4.189"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.81799 2.068C7.57499 0.311002 10.425 0.311002 12.182 2.068"
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

export default Keyboard2Wireless;

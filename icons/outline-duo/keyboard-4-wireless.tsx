import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard4Wireless({
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
          d="M14.25 6.75H3.75C2.64543 6.75 1.75 7.64543 1.75 8.75V13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V8.75C16.25 7.64543 15.3546 6.75 14.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 6.75H3.75C2.64543 6.75 1.75 7.64543 1.75 8.75V13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V8.75C16.25 7.64543 15.3546 6.75 14.25 6.75Z"
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
          d="M7.93903 4.189C8.52503 3.603 9.47503 3.603 10.06 4.189"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.81799 2.068C7.57499 0.311 10.425 0.311 12.182 2.068"
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

export default Keyboard4Wireless;

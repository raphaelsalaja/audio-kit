import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard4({
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
          d="M14.25 4.75H3.75C2.64543 4.75 1.75 5.64543 1.75 6.75V11.25C1.75 12.3546 2.64543 13.25 3.75 13.25H14.25C15.3546 13.25 16.25 12.3546 16.25 11.25V6.75C16.25 5.64543 15.3546 4.75 14.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 4.75H3.75C2.64543 4.75 1.75 5.64543 1.75 6.75V11.25C1.75 12.3546 2.64543 13.25 3.75 13.25H14.25C15.3546 13.25 16.25 12.3546 16.25 11.25V6.75C16.25 5.64543 15.3546 4.75 14.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 10.25H6.75"
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
      </g>
    </svg>
  );
}

export default Keyboard4;

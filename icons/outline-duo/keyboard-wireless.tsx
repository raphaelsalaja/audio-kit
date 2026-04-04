import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KeyboardWireless({
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
          d="M15.25 6.75H2.75C1.64543 6.75 0.75 7.64543 0.75 8.75V13.25C0.75 14.3546 1.64543 15.25 2.75 15.25H15.25C16.3546 15.25 17.25 14.3546 17.25 13.25V8.75C17.25 7.64543 16.3546 6.75 15.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 6.75H2.75C1.64543 6.75 0.75 7.64543 0.75 8.75V13.25C0.75 14.3546 1.64543 15.25 2.75 15.25H15.25C16.3546 15.25 17.25 14.3546 17.25 13.25V8.75C17.25 7.64543 16.3546 6.75 15.25 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 12.25H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 9H3.5C3.22386 9 3 9.22386 3 9.5V10C3 10.2761 3.22386 10.5 3.5 10.5H4C4.27614 10.5 4.5 10.2761 4.5 10V9.5C4.5 9.22386 4.27614 9 4 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4 11.5H3.5C3.22386 11.5 3 11.7239 3 12V12.5C3 12.7761 3.22386 13 3.5 13H4C4.27614 13 4.5 12.7761 4.5 12.5V12C4.5 11.7239 4.27614 11.5 4 11.5Z"
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
          d="M14.5 9H14C13.7239 9 13.5 9.22386 13.5 9.5V10C13.5 10.2761 13.7239 10.5 14 10.5H14.5C14.7761 10.5 15 10.2761 15 10V9.5C15 9.22386 14.7761 9 14.5 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 11.5H14C13.7239 11.5 13.5 11.7239 13.5 12V12.5C13.5 12.7761 13.7239 13 14 13H14.5C14.7761 13 15 12.7761 15 12.5V12C15 11.7239 14.7761 11.5 14.5 11.5Z"
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

export default KeyboardWireless;

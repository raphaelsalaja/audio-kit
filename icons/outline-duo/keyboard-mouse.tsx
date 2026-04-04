import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KeyboardMouse({
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
          d="M2.75 3.25H15.25C16.3546 3.25 17.25 4.14543 17.25 5.25V9.75C17.25 10.4903 16.8478 11.1366 16.25 11.4824V10.75C16.25 9.64543 15.3546 8.75 14.25 8.75H13.25C12.1454 8.75 11.25 9.64543 11.25 10.75V11.75H2.75C1.64543 11.75 0.75 10.8546 0.75 9.75V5.25C0.75 4.14543 1.64543 3.25 2.75 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.75 11.75H2.75C1.645 11.75 0.75 10.855 0.75 9.75V5.25C0.75 4.145 1.645 3.25 2.75 3.25H15.25C16.355 3.25 17.25 4.145 17.25 5.25V7.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.75H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 5.5H3.5C3.22386 5.5 3 5.72386 3 6V6.5C3 6.77614 3.22386 7 3.5 7H4C4.27614 7 4.5 6.77614 4.5 6.5V6C4.5 5.72386 4.27614 5.5 4 5.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4 8H3.5C3.22386 8 3 8.22386 3 8.5V9C3 9.27614 3.22386 9.5 3.5 9.5H4C4.27614 9.5 4.5 9.27614 4.5 9V8.5C4.5 8.22386 4.27614 8 4 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.5 5.5H6C5.72386 5.5 5.5 5.72386 5.5 6V6.5C5.5 6.77614 5.72386 7 6 7H6.5C6.77614 7 7 6.77614 7 6.5V6C7 5.72386 6.77614 5.5 6.5 5.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.25 5.5H8.75C8.47386 5.5 8.25 5.72386 8.25 6V6.5C8.25 6.77614 8.47386 7 8.75 7H9.25C9.52614 7 9.75 6.77614 9.75 6.5V6C9.75 5.72386 9.52614 5.5 9.25 5.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 5.5H14C13.7239 5.5 13.5 5.72386 13.5 6V6.5C13.5 6.77614 13.7239 7 14 7H14.5C14.7761 7 15 6.77614 15 6.5V6C15 5.72386 14.7761 5.5 14.5 5.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 5.5H11.5C11.2239 5.5 11 5.72386 11 6V6.5C11 6.77614 11.2239 7 11.5 7H12C12.2761 7 12.5 6.77614 12.5 6.5V6C12.5 5.72386 12.2761 5.5 12 5.5Z"
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

export default KeyboardMouse;

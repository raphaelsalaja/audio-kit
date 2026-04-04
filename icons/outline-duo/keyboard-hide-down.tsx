import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KeyboardHideDown({
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
          d="M15.25 2.75H2.75C1.64543 2.75 0.75 3.64543 0.75 4.75V9.25C0.75 10.3546 1.64543 11.25 2.75 11.25H15.25C16.3546 11.25 17.25 10.3546 17.25 9.25V4.75C17.25 3.64543 16.3546 2.75 15.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 2.75H2.75C1.64543 2.75 0.75 3.64543 0.75 4.75V9.25C0.75 10.3546 1.64543 11.25 2.75 11.25H15.25C16.3546 11.25 17.25 10.3546 17.25 9.25V4.75C17.25 3.64543 16.3546 2.75 15.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 8.25H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 5H3.5C3.22386 5 3 5.22386 3 5.5V6C3 6.27614 3.22386 6.5 3.5 6.5H4C4.27614 6.5 4.5 6.27614 4.5 6V5.5C4.5 5.22386 4.27614 5 4 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4 7.5H3.5C3.22386 7.5 3 7.72386 3 8V8.5C3 8.77614 3.22386 9 3.5 9H4C4.27614 9 4.5 8.77614 4.5 8.5V8C4.5 7.72386 4.27614 7.5 4 7.5Z"
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
          d="M14.5 5H14C13.7239 5 13.5 5.22386 13.5 5.5V6C13.5 6.27614 13.7239 6.5 14 6.5H14.5C14.7761 6.5 15 6.27614 15 6V5.5C15 5.22386 14.7761 5 14.5 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 7.5H14C13.7239 7.5 13.5 7.72386 13.5 8V8.5C13.5 8.77614 13.7239 9 14 9H14.5C14.7761 9 15 8.77614 15 8.5V8C15 7.72386 14.7761 7.5 14.5 7.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 5H11.5C11.2239 5 11 5.22386 11 5.5V6C11 6.27614 11.2239 6.5 11.5 6.5H12C12.2761 6.5 12.5 6.27614 12.5 6V5.5C12.5 5.22386 12.2761 5 12 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.5 13.75L9 16.25L6.5 13.75"
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

export default KeyboardHideDown;

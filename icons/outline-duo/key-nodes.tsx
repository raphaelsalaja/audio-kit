import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KeyNodes({
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
          d="M5.25 6.75C6.6307 6.75 7.75 5.631 7.75 4.25C7.75 2.869 6.6307 1.75 5.25 1.75C3.8693 1.75 2.75 2.869 2.75 4.25C2.75 5.631 3.8693 6.75 5.25 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 4.25H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 4.25V6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 4.25V6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C9.9665 16.25 10.75 15.466 10.75 14.5C10.75 13.534 9.9665 12.75 9 12.75C8.0335 12.75 7.25 13.534 7.25 14.5C7.25 15.466 8.0335 16.25 9 16.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M3.5 14.25C4.4665 14.25 5.25 13.466 5.25 12.5C5.25 11.534 4.4665 10.75 3.5 10.75C2.5335 10.75 1.75 11.534 1.75 12.5C1.75 13.466 2.5335 14.25 3.5 14.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.5 14.25C13.5335 14.25 12.75 13.466 12.75 12.5C12.75 11.534 13.5335 10.75 14.5 10.75C15.4665 10.75 16.25 11.534 16.25 12.5C16.25 13.466 15.4665 14.25 14.5 14.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C9.9665 16.25 10.75 15.466 10.75 14.5C10.75 13.534 9.9665 12.75 9 12.75C8.0335 12.75 7.25 13.534 7.25 14.5C7.25 15.466 8.0335 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.5 14.25C4.4665 14.25 5.25 13.466 5.25 12.5C5.25 11.534 4.4665 10.75 3.5 10.75C2.5335 10.75 1.75 11.534 1.75 12.5C1.75 13.466 2.5335 14.25 3.5 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.75V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.73706 11.263L5.95706 10.043C6.14506 9.855 6.25006 9.601 6.25006 9.336V8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 14.25C13.5335 14.25 12.75 13.466 12.75 12.5C12.75 11.534 13.5335 10.75 14.5 10.75C15.4665 10.75 16.25 11.534 16.25 12.5C16.25 13.466 15.4665 14.25 14.5 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.263 11.263L12.043 10.043C11.855 9.855 11.75 9.601 11.75 9.336V8.75"
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

export default KeyNodes;

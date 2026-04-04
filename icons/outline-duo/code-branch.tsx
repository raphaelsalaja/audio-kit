import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodeBranch({
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
          d="M4.75 5.75C5.85457 5.75 6.75 4.85457 6.75 3.75C6.75 2.64543 5.85457 1.75 4.75 1.75C3.64543 1.75 2.75 2.64543 2.75 3.75C2.75 4.85457 3.64543 5.75 4.75 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 5.75C14.3546 5.75 15.25 4.85457 15.25 3.75C15.25 2.64543 14.3546 1.75 13.25 1.75C12.1454 1.75 11.25 2.64543 11.25 3.75C11.25 4.85457 12.1454 5.75 13.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 16.25C5.85457 16.25 6.75 15.3546 6.75 14.25C6.75 13.1454 5.85457 12.25 4.75 12.25C3.64543 12.25 2.75 13.1454 2.75 14.25C2.75 15.3546 3.64543 16.25 4.75 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 5.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 5.75V6.75C13.25 7.855 12.355 8.75 11.25 8.75H6.75C5.645 8.75 4.75 9.645 4.75 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 5.75C5.85457 5.75 6.75 4.85457 6.75 3.75C6.75 2.64543 5.85457 1.75 4.75 1.75C3.64543 1.75 2.75 2.64543 2.75 3.75C2.75 4.85457 3.64543 5.75 4.75 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 5.75C14.3546 5.75 15.25 4.85457 15.25 3.75C15.25 2.64543 14.3546 1.75 13.25 1.75C12.1454 1.75 11.25 2.64543 11.25 3.75C11.25 4.85457 12.1454 5.75 13.25 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 16.25C5.85457 16.25 6.75 15.3546 6.75 14.25C6.75 13.1454 5.85457 12.25 4.75 12.25C3.64543 12.25 2.75 13.1454 2.75 14.25C2.75 15.3546 3.64543 16.25 4.75 16.25Z"
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

export default CodeBranch;

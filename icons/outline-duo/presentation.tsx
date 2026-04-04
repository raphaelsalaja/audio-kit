import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Presentation({
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
          d="M8 3.85016L13.7242 3.77618C14.8387 3.76178 15.75 4.66134 15.75 5.77601V10.7757C15.75 11.8702 14.8702 12.7614 13.7758 12.7755L8 12.8502V3.85016Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4 5.25C4.9665 5.25 5.75 4.4665 5.75 3.5C5.75 2.5335 4.9665 1.75 4 1.75C3.0335 1.75 2.25 2.5335 2.25 3.5C2.25 4.4665 3.0335 5.25 4 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.75 3.75H13.75C14.855 3.75 15.75 4.645 15.75 5.75V10.75C15.75 11.855 14.855 12.75 13.75 12.75H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 10.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 16.25V9.75C2.25 8.645 3.145 7.75 4.25 7.75H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 5.25C4.9665 5.25 5.75 4.4665 5.75 3.5C5.75 2.5335 4.9665 1.75 4 1.75C3.0335 1.75 2.25 2.5335 2.25 3.5C2.25 4.4665 3.0335 5.25 4 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 12.75L12.5 16.25"
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

export default Presentation;

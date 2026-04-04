import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MaskCircle({
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
          d="M11.25 3.99999C11.25 8.00405 8.00405 11.25 3.99999 11.25C3.31457 11.25 2.65137 11.1549 2.02286 10.9771C2.88349 14.0202 5.68134 16.25 8.99999 16.25C13.0041 16.25 16.25 13.0041 16.25 8.99999C16.25 5.68134 14.0202 2.88349 10.9771 2.02286C11.1549 2.65137 11.25 3.31457 11.25 3.99999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.02899 10.971C2.65699 11.148 3.31599 11.25 3.99999 11.25C8.00399 11.25 11.25 8.00399 11.25 3.99999C11.25 3.31599 11.149 2.65599 10.971 2.02899"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
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

export default MaskCircle;

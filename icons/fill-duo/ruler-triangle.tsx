import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RulerTriangle({
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
          d="M3.08 1.798C3.736 1.525 4.484 1.675 4.987 2.177L15.823 13.014C16.325 13.516 16.474 14.264 16.202 14.921C15.931 15.577 15.296 16.001 14.586 16.001H12H3.75C2.785 16.001 2 15.216 2 14.251V12.501V3.415C2 2.704 2.424 2.07 3.08 1.798Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2 12.5L3.575 12.5C3.94779 12.5 4.25 12.1642 4.25 11.75C4.25 11.3358 3.94779 11 3.575 11L2 11L2 12.5Z"
          fill={fill}
        />
        <path
          d="M2 9.5L3.575 9.5C3.94779 9.5 4.25 9.16421 4.25 8.75C4.25 8.33579 3.94779 8 3.575 8L2 8L2 9.5Z"
          fill={fill}
        />
        <path
          d="M2 6.5L3.575 6.5C3.94779 6.5 4.25 6.16421 4.25 5.75C4.25 5.33579 3.94779 5 3.575 5L2 5L2 6.5Z"
          fill={fill}
        />
        <path
          d="M7.00519 16V14.5021C7.00519 14.0867 6.6694 13.75 6.25519 13.75C5.84097 13.75 5.50519 14.0867 5.50519 14.5021L5.50519 16H7.00519Z"
          fill={fill}
        />
        <path
          d="M10 16V14.5021C10 14.0867 9.66421 13.75 9.25 13.75C8.83579 13.75 8.5 14.0867 8.5 14.5021L8.5 16H10Z"
          fill={fill}
        />
        <path
          d="M13 16V14.5021C13 14.0867 12.6642 13.75 12.25 13.75C11.8358 13.75 11.5 14.0867 11.5 14.5021L11.5 16H13Z"
          fill={fill}
        />
        <path
          d="M9 12L6.49902 12C6.22302 12 5.99902 11.776 5.99902 11.5L5.99902 9C5.99902 8.554 6.53802 8.332 6.85302 8.646L9.354 11.146C9.669 11.461 9.446 12 9 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RulerTriangle;

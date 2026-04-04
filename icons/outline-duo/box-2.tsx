import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Box2({
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
          d="M9.406 1.93101L15.75 4.75001L9.406 7.56901C9.147 7.68401 8.852 7.68401 8.594 7.56901L2.25 4.75001L8.594 1.93101C8.853 1.81601 9.148 1.81601 9.406 1.93101Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 9.24999V6.08299L12 3.08299"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.406 1.93101L15.75 4.75001L9.406 7.56901C9.147 7.68401 8.852 7.68401 8.594 7.56901L2.25 4.75001L8.594 1.93101C8.853 1.81601 9.148 1.81601 9.406 1.93101Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 4.75V12.6C2.25 12.995 2.483 13.353 2.844 13.514L8.594 16.07C8.853 16.185 9.148 16.185 9.406 16.07L15.156 13.514C15.517 13.353 15.75 12.995 15.75 12.6V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 7.65601V16.069"
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

export default Box2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Compose2({
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
          d="M7.75 10.25C7.75 10.25 10.0838 10.1662 10.909 9.34101L15.784 4.46601C16.4053 3.84471 16.4053 2.83731 15.784 2.21601C15.1627 1.59471 14.1553 1.59471 13.534 2.21601L8.659 7.09101C7.8809 7.86911 7.75 10.25 7.75 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 9.2422V13.25C15.25 14.355 14.355 15.25 13.25 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V4.75C2.75 3.645 3.645 2.75 4.75 2.75H8.75781"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 10.25C7.75 10.25 10.0838 10.1662 10.909 9.34101L15.784 4.46601C16.4053 3.84471 16.4053 2.83731 15.784 2.21601C15.1627 1.59471 14.1553 1.59471 13.534 2.21601L8.659 7.09101C7.8809 7.86911 7.75 10.25 7.75 10.25Z"
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

export default Compose2;

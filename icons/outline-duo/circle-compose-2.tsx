import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCompose2({
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
          d="M9.70959 1.7983C9.47479 1.7754 9.2405 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 13.0039 4.996 16.25 9 16.25C13.004 16.25 16.25 13.0039 16.25 9C16.25 8.7595 16.2245 8.5251 16.2018 8.2905"
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

export default CircleCompose2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallBowling({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 8C6.05228 8 6.5 7.55228 6.5 7C6.5 6.44772 6.05228 6 5.5 6C4.94772 6 4.5 6.44772 4.5 7C4.5 7.55228 4.94772 8 5.5 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.5 6C9.05228 6 9.5 5.55228 9.5 5C9.5 4.44772 9.05228 4 8.5 4C7.94772 4 7.5 4.44772 7.5 5C7.5 5.55228 7.94772 6 8.5 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.5 10C9.05228 10 9.5 9.55228 9.5 9C9.5 8.44772 9.05228 8 8.5 8C7.94772 8 7.5 8.44772 7.5 9C7.5 9.55228 7.94772 10 8.5 10Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BallBowling;

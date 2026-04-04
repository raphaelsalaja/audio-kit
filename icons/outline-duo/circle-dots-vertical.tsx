import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDotsVertical({
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
          d="M8 9C8 8.449 8.449 8 9 8C9.551 8 10 8.449 10 9C10 9.551 9.551 10 9 10C8.449 10 8 9.551 8 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8 5.5C8 4.949 8.449 4.5 9 4.5C9.551 4.5 10 4.949 10 5.5C10 6.051 9.551 6.5 9 6.5C8.449 6.5 8 6.051 8 5.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8 12.5C8 11.949 8.449 11.5 9 11.5C9.551 11.5 10 11.949 10 12.5C10 13.051 9.551 13.5 9 13.5C8.449 13.5 8 13.051 8 12.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CircleDotsVertical;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PointerCircle({
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
          d="M16.25 9C16.25 13.0041 13.0041 16.25 9 16.25C4.99594 16.25 1.75 13.0041 1.75 9C1.75 4.99594 4.99594 1.75 9 1.75C13.0041 1.75 16.25 4.99594 16.25 9ZM12.802 8.356L6.40499 6.019L6.40399 6.02C6.16399 5.932 5.92999 6.165 6.01799 6.406L8.35499 12.803C8.45399 13.072 8.83799 13.064 8.92499 12.791L9.86199 9.863L12.79 8.926C13.064 8.838 13.072 8.454 12.802 8.356Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
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
          d="M6.40499 6.019L12.802 8.356C13.072 8.454 13.064 8.838 12.79 8.926L9.86199 9.863L8.92499 12.791C8.83799 13.064 8.45399 13.072 8.35499 12.803L6.01799 6.406C5.92999 6.165 6.16399 5.932 6.40399 6.02L6.40499 6.019Z"
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

export default PointerCircle;

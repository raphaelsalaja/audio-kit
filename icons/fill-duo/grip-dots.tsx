import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GripDots({
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
          d="M9.00012 8C9.69048 8 10.2501 7.44036 10.2501 6.75C10.2501 6.05964 9.69048 5.5 9.00012 5.5C8.30977 5.5 7.75012 6.05964 7.75012 6.75C7.75012 7.44036 8.30977 8 9.00012 8Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00012 12.5C9.69048 12.5 10.2501 11.9404 10.2501 11.25C10.2501 10.5596 9.69048 10 9.00012 10C8.30977 10 7.75012 10.5596 7.75012 11.25C7.75012 11.9404 8.30977 12.5 9.00012 12.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 8C14.9405 8 15.5001 7.44036 15.5001 6.75C15.5001 6.05964 14.9405 5.5 14.2501 5.5C13.5598 5.5 13.0001 6.05964 13.0001 6.75C13.0001 7.44036 13.5598 8 14.2501 8Z"
          fill={fill}
        />
        <path
          d="M3.75012 8C4.44048 8 5.00011 7.44036 5.00011 6.75C5.00011 6.05964 4.44048 5.5 3.75012 5.5C3.05977 5.5 2.50012 6.05964 2.50012 6.75C2.50012 7.44036 3.05977 8 3.75012 8Z"
          fill={fill}
        />
        <path
          d="M14.2501 12.5C14.9405 12.5 15.5001 11.9404 15.5001 11.25C15.5001 10.5596 14.9405 10 14.2501 10C13.5598 10 13.0001 10.5596 13.0001 11.25C13.0001 11.9404 13.5598 12.5 14.2501 12.5Z"
          fill={fill}
        />
        <path
          d="M3.75012 12.5C4.44048 12.5 5.00011 11.9404 5.00011 11.25C5.00011 10.5596 4.44048 10 3.75012 10C3.05977 10 2.50012 10.5596 2.50012 11.25C2.50012 11.9404 3.05977 12.5 3.75012 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GripDots;

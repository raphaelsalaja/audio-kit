import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EqualGreaterThan({
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
          d="M3 15.75C3 15.3358 3.33579 15 3.75 15H14.25C14.6642 15 15 15.3358 15 15.75C15 16.1642 14.6642 16.5 14.25 16.5H3.75C3.33579 16.5 3 16.1642 3 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.33595 1.90137C3.52849 1.53463 3.98188 1.39341 4.34863 1.58595L14.3486 6.83595C14.5954 6.96552 14.75 7.22126 14.75 7.5C14.75 7.77874 14.5954 8.03448 14.3486 8.16405L4.34863 13.414C3.98188 13.6066 3.52849 13.4654 3.33595 13.0986C3.14341 12.7319 3.28463 12.2785 3.65137 12.086L12.3865 7.5L3.65137 2.91405C3.28463 2.72151 3.14341 2.26812 3.33595 1.90137Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EqualGreaterThan;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BooleanIntersect({
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
          d="M2 3.75C2 2.78379 2.78379 2 3.75 2H5.25C5.66421 2 6 2.33579 6 2.75C6 3.16421 5.66421 3.5 5.25 3.5H3.75C3.61221 3.5 3.5 3.61221 3.5 3.75V5C3.5 5.41421 3.16421 5.75 2.75 5.75C2.33579 5.75 2 5.41421 2 5V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.25 12C15.6642 12 16 12.3358 16 12.75V14.25C16 15.2162 15.2162 16 14.25 16H13C12.5858 16 12.25 15.6642 12.25 15.25C12.25 14.8358 12.5858 14.5 13 14.5H14.25C14.3878 14.5 14.5 14.3878 14.5 14.25V12.75C14.5 12.3358 14.8358 12 15.25 12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.75 2C8.33579 2 8 2.33579 8 2.75C8 3.16421 8.33579 3.5 8.75 3.5H10.25C10.3878 3.5 10.5 3.61221 10.5 3.75V6.75C10.5 7.16421 10.8358 7.5 11.25 7.5H14.25C14.3878 7.5 14.5 7.61221 14.5 7.75V9.25C14.5 9.66421 14.8358 10 15.25 10C15.6642 10 16 9.66421 16 9.25V7.75C16 6.78379 15.2162 6 14.25 6H12V3.75C12 2.78379 11.2162 2 10.25 2H8.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.5 9C3.5 8.58579 3.16421 8.25 2.75 8.25C2.33579 8.25 2 8.58579 2 9V10.25C2 11.2162 2.78379 12 3.75 12H6V14.25C6 15.2162 6.78379 16 7.75 16H9C9.41421 16 9.75 15.6642 9.75 15.25C9.75 14.8358 9.41421 14.5 9 14.5H7.75C7.61221 14.5 7.5 14.3878 7.5 14.25V11.25C7.5 10.8358 7.16421 10.5 6.75 10.5H3.75C3.61221 10.5 3.5 10.3878 3.5 10.25V9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 7.75C6 6.78379 6.78379 6 7.75 6H12V10.25C12 11.2162 11.2162 12 10.25 12H6V7.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BooleanIntersect;

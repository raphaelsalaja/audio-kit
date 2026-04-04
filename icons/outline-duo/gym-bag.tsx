import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GymBag({
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
          d="M12.25 6.75H5.75V15.25H12.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.75 15.25V5C5.75 3.205 7.205 1.75 9 1.75C10.795 1.75 12.25 3.205 12.25 5V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.607 15.25C15.02 15.25 15.389 15.002 15.539 14.617C15.869 13.77 16.249 12.381 16.249 11C16.249 10.413 16.18 8.82 15.558 7.371C15.398 6.998 15.034 6.75 14.628 6.75H3.371C2.965 6.75 2.601 6.998 2.441 7.371C1.818 8.82 1.75 10.413 1.75 11C1.75 12.382 2.13 13.77 2.46 14.617C2.61 15.002 2.979 15.25 3.392 15.25H14.607Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 9.25H9.75"
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

export default GymBag;

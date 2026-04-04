import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Database({
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
          d="M9 6.5C12.4518 6.5 15.25 5.49264 15.25 4.25C15.25 3.00736 12.4518 2 9 2C5.54822 2 2.75 3.00736 2.75 4.25C2.75 5.49264 5.54822 6.5 9 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 6.5C12.4518 6.5 15.25 5.49264 15.25 4.25C15.25 3.00736 12.4518 2 9 2C5.54822 2 2.75 3.00736 2.75 4.25C2.75 5.49264 5.54822 6.5 9 6.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 4.25V13.75C2.75 14.993 5.548 16 9 16C12.452 16 15.25 14.993 15.25 13.75V4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 9C2.75 10.243 5.548 11.25 9 11.25C12.452 11.25 15.25 10.243 15.25 9"
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

export default Database;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareMinus2({
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
          d="M11.5 3.25C11.5 2.83579 11.8358 2.5 12.25 2.5H17.25C17.6642 2.5 18 2.83579 18 3.25C18 3.66421 17.6642 4 17.25 4H12.25C11.8358 4 11.5 3.66421 11.5 3.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.3789 2C10.1396 2.35752 10 2.78746 10 3.25C10 4.49264 11.0074 5.5 12.25 5.5H16V13.25C16 14.7692 14.7692 16 13.25 16H4.75C3.23079 16 2 14.7692 2 13.25V4.75C2 3.23079 3.23079 2 4.75 2H10.3789Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SquareMinus2;

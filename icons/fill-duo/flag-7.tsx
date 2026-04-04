import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag7({
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
          d="M3 3.25C3 2.83579 3.33579 2.5 3.75 2.5H11.25C12.2162 2.5 13 3.28379 13 4.25V9.25C13 9.66421 12.6642 10 12.25 10H3.75C3.33579 10 3 9.66421 3 9.25V3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 10V10.75C9 11.7162 9.78379 12.5 10.75 12.5H14.25C15.2162 12.5 16 11.7162 16 10.75V6.75C16 5.78379 15.2162 5 14.25 5H13V9.25C13 9.66421 12.6642 10 12.25 10H9Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M3.75 1C4.16421 1 4.5 1.33579 4.5 1.75V16.25C4.5 16.6642 4.16421 17 3.75 17C3.33579 17 3 16.6642 3 16.25V1.75C3 1.33579 3.33579 1 3.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Flag7;

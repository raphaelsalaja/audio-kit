import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiagramGantt({
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
          d="M13.5 15.25C13.5 14.8358 13.8358 14.5 14.25 14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H14.25C13.8358 16 13.5 15.6642 13.5 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 7.25C3 6.83579 3.33579 6.5 3.75 6.5H10.25C10.6642 6.5 11 6.83579 11 7.25C11 7.66421 10.6642 8 10.25 8H3.75C3.33579 8 3 7.66421 3 7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 11.25C7 10.8358 7.33579 10.5 7.75 10.5H14.25C14.6642 10.5 15 10.8358 15 11.25C15 11.6642 14.6642 12 14.25 12H7.75C7.33579 12 7 11.6642 7 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 3.25C1 2.83579 1.33579 2.5 1.75 2.5H3.75C4.16421 2.5 4.5 2.83579 4.5 3.25C4.5 3.66421 4.16421 4 3.75 4H1.75C1.33579 4 1 3.66421 1 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DiagramGantt;

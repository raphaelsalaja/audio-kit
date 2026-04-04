import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2Bottom({
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
          d="M1 15.25C1 14.8358 1.33579 14.5 1.75 14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H1.75C1.33579 16 1 15.6642 1 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6 3.75C6 2.78334 6.78393 2 7.75 2H10.25C11.2161 2 12 2.78334 12 3.75V11.25C12 12.2167 11.2161 13 10.25 13H7.75C6.78393 13 6 12.2167 6 11.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Align2Bottom;

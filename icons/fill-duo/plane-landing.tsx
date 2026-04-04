import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlaneLanding({
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
          d="M16.611 9.44499C16.275 8.97999 15.777 8.67599 15.215 8.59099L4.73101 6.90299L4.13301 5.60199C3.88301 5.06499 3.35501 4.73199 2.72901 4.73199L1.65601 4.76399C1.43001 4.76999 1.21801 4.87899 1.08201 5.05899C0.944014 5.23899 0.896014 5.47199 0.950014 5.69199L1.53801 8.08899C1.69101 8.72399 2.08101 9.266 2.63701 9.614L4.72601 10.926C5.00301 11.1 5.30801 11.217 5.63401 11.273L14.565 12.771C14.677 12.79 14.789 12.798 14.9 12.798C15.929 12.798 16.804 12.061 16.982 11.045C17.08 10.479 16.95 9.91 16.614 9.44399L16.611 9.44499Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H2.75C2.33579 16 2 15.6642 2 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.18346 1.44245C5.92929 1.43321 5.68775 1.5534 5.54185 1.76173C5.39595 1.97007 5.36558 2.23814 5.46117 2.47383L7.43399 7.33819L12.2907 8.12016C12.289 8.11731 12.2873 8.11447 12.2856 8.11164L8.83391 2.40883C8.82995 2.40228 8.82599 2.39573 8.82204 2.38917C8.79157 2.33871 8.76111 2.28827 8.72736 2.23989C8.41434 1.7913 7.90663 1.51328 7.35568 1.49347L6.18346 1.44245Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PlaneLanding;

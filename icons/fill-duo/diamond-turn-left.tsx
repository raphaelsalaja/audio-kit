import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiamondTurnLeft({
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
          d="M7.05565 1.88358C8.12955 0.809678 9.87041 0.809688 10.9443 1.88357L16.1153 7.05468C17.1892 8.12864 17.1892 9.86981 16.1153 10.9437L10.9443 16.1148C9.87043 17.1888 8.12955 17.1888 7.05564 16.1148L1.88464 10.9437C0.810732 9.86982 0.810781 8.12867 1.88461 7.05471L7.05565 1.88358Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.53033 7.03033C8.82322 6.73744 8.82322 6.26256 8.53033 5.96967C8.23744 5.67678 7.76256 5.67678 7.46967 5.96967L5.21967 8.21967C4.92678 8.51256 4.92678 8.98744 5.21967 9.28033L7.46967 11.5303C7.76256 11.8232 8.23744 11.8232 8.53033 11.5303C8.82322 11.2374 8.82322 10.7626 8.53033 10.4697L7.56066 9.5H9.25002C9.9408 9.5 10.5 10.0592 10.5 10.75V11.25C10.5 11.6642 10.8358 12 11.25 12C11.6642 12 12 11.6642 12 11.25V10.75C12 9.23079 10.7692 8 9.25002 8H7.56066L8.53033 7.03033Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DiamondTurnLeft;

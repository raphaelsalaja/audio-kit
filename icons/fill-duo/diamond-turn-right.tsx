import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiamondTurnRight({
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
          d="M10.5303 5.96967C10.2374 5.67678 9.76256 5.67678 9.46967 5.96967C9.17678 6.26256 9.17678 6.73744 9.46967 7.03033L10.4393 8H8.75C7.23079 8 6 9.23079 6 10.75V11.25C6 11.6642 6.33579 12 6.75 12C7.16421 12 7.5 11.6642 7.5 11.25V10.75C7.5 10.0592 8.05921 9.5 8.75 9.5H10.4393L9.46967 10.4697C9.17678 10.7626 9.17678 11.2374 9.46967 11.5303C9.76256 11.8232 10.2374 11.8232 10.5303 11.5303L12.7803 9.28033C13.0732 8.98744 13.0732 8.51256 12.7803 8.21967L10.5303 5.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DiamondTurnRight;

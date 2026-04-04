import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConstructionCrane({
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
          d="M16.072 3.785L16.672 5.286C16.826 5.67 16.78 6.106 16.547 6.45C16.315 6.794 15.928 7 15.512 7H2.25C1.561 7 1 6.439 1 5.75V4.25C1 3.561 1.561 3 2.25 3H14.911C15.425 3 15.881 3.308 16.072 3.785Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4 9.75C4 9.33579 4.33579 9 4.75 9H8.25C8.66421 9 9 9.33579 9 9.75C9 10.1642 8.66421 10.5 8.25 10.5H4.75C4.33579 10.5 4 10.1642 4 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13 10V7H14.5V10H15.25C15.9401 10 16.5 10.5596 16.5 11.25V12.75C16.5 13.4404 15.9401 14 15.25 14H12.25C11.5599 14 11 13.4404 11 12.75V11.25C11 10.5596 11.5599 10 12.25 10H13Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 15.5H3C2.58579 15.5 2.25 15.8358 2.25 16.25C2.25 16.6642 2.58579 17 3 17H10C10.4142 17 10.75 16.6642 10.75 16.25C10.75 15.8358 10.4142 15.5 10 15.5H9V2.25C9 1.55979 8.44021 1 7.75 1H5.25C4.55979 1 4 1.55979 4 2.25V15.5ZM5.5 13V2.5H7.5V13H5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ConstructionCrane;

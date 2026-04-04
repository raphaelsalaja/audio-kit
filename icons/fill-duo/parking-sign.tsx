import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ParkingSign({
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
          d="M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V13.25C16 14.7692 14.7692 16 13.25 16H4.75C3.23079 16 2 14.7692 2 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.25 5H9.5C10.8799 5 12 6.11851 12 7.5C12 8.88021 10.8802 10 9.5 10H8V12.25C8 12.6642 7.66421 13 7.25 13C6.83579 13 6.5 12.6642 6.5 12.25V5.75C6.5 5.33579 6.83579 5 7.25 5ZM8 6.5V8.5H9.5C10.0518 8.5 10.5 8.05179 10.5 7.5C10.5 6.94749 10.0521 6.5 9.5 6.5H8Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ParkingSign;

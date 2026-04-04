import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseMedical({
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
          d="M1 6.75C1 5.23079 2.23079 4 3.75 4H14.25C15.7692 4 17 5.23079 17 6.75V13.25C17 14.7692 15.7692 16 14.25 16H3.75C2.23079 16 1 14.7692 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 7.75C9.75 7.33579 9.41421 7 9 7C8.58579 7 8.25 7.33579 8.25 7.75V9.25H6.75C6.33579 9.25 6 9.58579 6 10C6 10.4142 6.33579 10.75 6.75 10.75H8.25V12.25C8.25 12.6642 8.58579 13 9 13C9.41421 13 9.75 12.6642 9.75 12.25V10.75H11.25C11.6642 10.75 12 10.4142 12 10C12 9.58579 11.6642 9.25 11.25 9.25H9.75V7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcaseMedical;

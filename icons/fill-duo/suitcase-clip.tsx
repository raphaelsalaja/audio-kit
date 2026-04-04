import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseClip({
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
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M11 11.75C11 10.6458 11.8958 9.75 13 9.75C14.1042 9.75 15 10.6458 15 11.75V13.75C15 14.1642 14.6642 14.5 14.25 14.5C13.8358 14.5 13.5 14.1642 13.5 13.75V11.75C13.5 11.4742 13.2758 11.25 13 11.25C12.7242 11.25 12.5 11.4742 12.5 11.75V14.25C12.5 15.2168 13.2832 16 14.25 16C15.2168 16 16 15.2168 16 14.25V12.25C16 11.8358 16.3358 11.5 16.75 11.5C17.1642 11.5 17.5 11.8358 17.5 12.25V14.25C17.5 16.0452 16.0452 17.5 14.25 17.5C12.4548 17.5 11 16.0452 11 14.25V11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V10.0137C16.9179 10.0047 16.8345 10 16.75 10C16.5192 10 16.2965 10.0347 16.0869 10.0993C15.497 8.99873 14.3358 8.25 13 8.25C11.0674 8.25 9.5 9.81736 9.5 11.75V14.25C9.5 14.868 9.61799 15.4585 9.83267 16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseClip;

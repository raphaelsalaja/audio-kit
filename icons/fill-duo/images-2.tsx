import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Images2({
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
          d="M4 4.75C4 3.23079 5.23079 2 6.75 2H14.25C15.7692 2 17 3.23079 17 4.75V10.25C17 11.7692 15.7692 13 14.25 13H6.75C5.23079 13 4 11.7692 4 10.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.9482 10.7842C16.6996 12.0476 15.5864 13 14.25 13H6.74999C6.47286 13 6.20533 12.959 5.95312 12.8829L11.793 7.043C12.184 6.652 12.817 6.652 13.207 7.043L16.9482 10.7842Z"
          fill={fill}
        />
        <path
          d="M1.75 6C2.16421 6 2.5 6.33579 2.5 6.75V13.25C2.5 13.9408 3.05921 14.5 3.75 14.5H12.25C12.6642 14.5 13 14.8358 13 15.25C13 15.6642 12.6642 16 12.25 16H3.75C2.23079 16 1 14.7692 1 13.25V6.75C1 6.33579 1.33579 6 1.75 6Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8 7C7.449 7 7 6.551 7 6C7 5.449 7.449 5 8 5C8.551 5 9 5.449 9 6C9 6.551 8.551 7 8 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Images2;

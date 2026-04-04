import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Microphone3Off({
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
          d="M9 0C6.79077 0 5 1.7909 5 4V7.5C5 8.98974 5.81439 10.2893 7.0223 10.9777L13 4.99999V4C13 1.7909 11.2092 0 9 0Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.93543 12.0646C4.46766 11.0757 3.5 9.39831 3.5 7.5C3.5 7.08579 3.16421 6.75 2.75 6.75C2.33579 6.75 2 7.08579 2 7.5C2 9.81199 3.12629 11.8656 4.85908 13.1409L5.93543 12.0646Z"
          fill={fill}
        />
        <path
          d="M6.97918 14.2028C7.38836 14.3264 7.81323 14.4134 8.25 14.4601V16.5H5.75C5.33579 16.5 5 16.8358 5 17.25C5 17.6642 5.33579 18 5.75 18H12.25C12.6642 18 13 17.6642 13 17.25C13 16.8358 12.6642 16.5 12.25 16.5H9.75V14.4601C13.2588 14.0848 16 11.1069 16 7.5C16 7.08579 15.6642 6.75 15.25 6.75C14.8358 6.75 14.5 7.08579 14.5 7.5C14.5 10.5318 12.0318 13 9 13C8.74048 13 8.48509 12.9819 8.23503 12.9469L6.97918 14.2028Z"
          fill={fill}
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13 5L12 6.5H9.75C9.33579 6.5 9 6.16421 9 5.75C9 5.33579 9.33579 5 9.75 5H13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Microphone3Off;

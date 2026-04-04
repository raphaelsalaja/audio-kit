import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Camera3Off({
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
          d="M15.1945 2.80544C14.6969 2.30779 14.0094 2 13.25 2H4.75C3.23119 2 2 3.23119 2 4.75V13.25C2 14.0094 2.30779 14.6969 2.80544 15.1945L15.1945 2.80544Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.25 6C5.6642 6 6 5.6642 6 5.25C6 4.8358 5.6642 4.5 5.25 4.5C4.8358 4.5 4.5 4.8358 4.5 5.25C4.5 5.6642 4.8358 6 5.25 6Z"
          fill={fill}
        />
        <path
          d="M11.4749 6.52511C10.8415 5.89174 9.9665 5.5 9 5.5C7.06699 5.5 5.5 7.06699 5.5 9C5.5 9.9665 5.89174 10.8415 6.52511 11.4749L11.4749 6.52511Z"
          fill={fill}
        />
        <path
          d="M16 5.18198L5.18198 16H13.25C14.7688 16 16 14.7688 16 13.25V5.18198Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.69507 12.4869C8.79556 12.4956 8.89726 12.5 9 12.5C10.933 12.5 12.5 10.933 12.5 9C12.5 8.89726 12.4956 8.79556 12.4869 8.69507L8.69507 12.4869Z"
          fill={fill}
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Camera3Off;

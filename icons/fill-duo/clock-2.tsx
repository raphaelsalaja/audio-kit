import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Clock2({
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
          d="M1 9C1 4.58179 4.58179 1 9 1C13.4182 1 17 4.58179 17 9C17 13.4182 13.4182 17 9 17C4.58179 17 1 13.4182 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.0303 4.96967C13.3232 5.26256 13.3232 5.73744 13.0303 6.03033L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L9 7.93934L11.9697 4.96967C12.2626 4.67678 12.7374 4.67678 13.0303 4.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 4C9.4142 4 9.75 3.664 9.75 3.25C9.75 2.836 9.4142 2.5 9 2.5C8.5858 2.5 8.25 2.836 8.25 3.25C8.25 3.664 8.5858 4 9 4Z"
          fill={fill}
        />
        <path
          d="M14.75 9.75C15.1642 9.75 15.5 9.414 15.5 9C15.5 8.586 15.1642 8.25 14.75 8.25C14.3358 8.25 14 8.586 14 9C14 9.414 14.3358 9.75 14.75 9.75Z"
          fill={fill}
        />
        <path
          d="M9 15.5C9.4142 15.5 9.75 15.164 9.75 14.75C9.75 14.336 9.4142 14 9 14C8.5858 14 8.25 14.336 8.25 14.75C8.25 15.164 8.5858 15.5 9 15.5Z"
          fill={fill}
        />
        <path
          d="M3.25 9.75C3.6642 9.75 4 9.414 4 9C4 8.586 3.6642 8.25 3.25 8.25C2.8358 8.25 2.5 8.586 2.5 9C2.5 9.414 2.8358 9.75 3.25 9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Clock2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Timer2({
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
          d="M9.00006 1V9L3.3432 3.34317C4.79092 1.89545 6.79095 1 9.00006 1C9.00007 1 9.00005 1 9.00006 1Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M9 1C4.58179 1 1 4.58179 1 9C1 13.4182 4.58179 17 9 17C13.4182 17 17 13.4182 17 9C17 4.58181 13.4182 1.00003 9 1C9.00002 1 8.99998 1 9 1ZM9 1C6.79089 1 4.79092 1.89545 3.3432 3.34317L9.00006 9L9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L9.53033 8.46967C9.82322 8.76256 9.82322 9.23744 9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Timer2;

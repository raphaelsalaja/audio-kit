import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartScatter({
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
          d="M2.75 2.75V12.75C2.75 13.855 3.645 14.75 4.75 14.75H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 12C6.55228 12 7 11.5523 7 11C7 10.4477 6.55228 10 6 10C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.5 10C11.0523 10 11.5 9.55228 11.5 9C11.5 8.44772 11.0523 8 10.5 8C9.94772 8 9.5 8.44772 9.5 9C9.5 9.55228 9.94772 10 10.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11 6C11.5523 6 12 5.55228 12 5C12 4.44772 11.5523 4 11 4C10.4477 4 10 4.44772 10 5C10 5.55228 10.4477 6 11 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14 11.5C14.5523 11.5 15 11.0523 15 10.5C15 9.94772 14.5523 9.5 14 9.5C13.4477 9.5 13 9.94772 13 10.5C13 11.0523 13.4477 11.5 14 11.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ChartScatter;

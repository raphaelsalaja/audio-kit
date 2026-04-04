import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLayoutGrid({
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
          d="M13.75 2H4.25C2.73122 2 1.5 3.23122 1.5 4.75V13.25C1.5 14.7688 2.73122 16 4.25 16H13.75C15.2688 16 16.5 14.7688 16.5 13.25V4.75C16.5 3.23122 15.2688 2 13.75 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.00012 2H7.50013V5.5H16.5V7H7.50013V11H16.5V12.5H7.50013V16H6.00012V2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RectLayoutGrid;

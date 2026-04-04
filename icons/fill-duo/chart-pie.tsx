import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartPie({
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
          d="M17 9H9.75C9.33579 9 9 8.66421 9 8.25V1C13.4183 1 17 4.58172 17 9Z"
          fill={fill}
        />
        <path
          d="M9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9H9.75C9.33579 9 9 8.66421 9 8.25V1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ChartPie;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareActivityChart({
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
          d="M2 10V13.25C2 14.7692 3.23079 16 4.75 16H13.25C14.7692 16 16 14.7692 16 13.25V9.5H12.9635L11.8516 11.7239C11.3988 12.6294 10.1132 12.6493 9.63306 11.7575L7.27473 7.37778L6.30916 9.309C6.09743 9.73245 5.66466 10 5.19113 10H2Z"
          fill={fill}
        />
        <path
          d="M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V8H12.809C12.3355 8 11.9027 8.26755 11.691 8.691L10.7254 10.6222L8.36559 6.23978C7.90027 5.38417 6.61139 5.3502 6.14851 6.2761L5.0366 8.5H2V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SquareActivityChart;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flame({
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
          d="M9.493 1.185C9.211 0.939004 8.79001 0.939004 8.50801 1.185C8.27301 1.39 2.75101 6.252 2.75101 10.733C2.75101 14.189 5.55501 17 9.00101 17C12.447 17 15.251 14.188 15.251 10.733C15.25 6.252 9.728 1.389 9.493 1.185Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00001 15.5C7.47701 15.5 6.23801 14.258 6.23801 12.731C6.23801 10.909 8.27501 9.081 8.50801 8.879C8.79001 8.633 9.211 8.633 9.493 8.879C9.725 9.081 11.763 10.909 11.763 12.731C11.763 14.257 10.523 15.5 9.00001 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Flame;

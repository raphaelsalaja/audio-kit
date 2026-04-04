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
          d="M16 9.5H12.9635L11.8516 11.7239C11.3988 12.6294 10.1132 12.6493 9.63305 11.7575L7.27472 7.37778L6.30915 9.309C6.09742 9.73245 5.66465 10 5.19112 10H2V13.25C2 14.7692 3.23079 16 4.75 16H13.25C14.7692 16 16 14.7692 16 13.25V9.5Z"
          fill={secondaryfill}
        />
        <path
          d="M4.75 2C3.23079 2 2 3.23079 2 4.75V8.5H5.03659L6.1485 6.2761C6.59578 5.38141 7.85561 5.35145 8.34905 6.21015C8.36749 6.24223 8.38459 6.27507 8.40213 6.30765L10.7254 10.6222L11.691 8.691C11.9027 8.26755 12.3355 8 12.809 8H16V4.75C16 3.23079 14.7692 2 13.25 2H4.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareActivityChart;

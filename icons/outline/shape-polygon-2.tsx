import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShapePolygon2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m5.234,1.52l-3.524,2.83c-.374.3-.54.792-.424,1.26l1.049,4.209c.137.548.627.932,1.189.932h4.951c.562,0,1.053-.384,1.189-.932l1.049-4.209c.116-.467-.049-.959-.424-1.26l-3.524-2.83c-.448-.36-1.084-.36-1.532,0h0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default ShapePolygon2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Award3({
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
          d="m6,7.75c-1.281,0-2.39-.696-3-1.723v5.472c0,.399.445.638.777.416l2.223-1.482,2.223,1.482c.332.221.777-.017.777-.416v-5.472c-.61,1.027-1.719,1.723-3,1.723Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <circle
          cx="6"
          cy="4.25"
          fill="none"
          r="3.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default Award3;

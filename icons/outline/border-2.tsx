import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Border2({
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
        <rect
          height="9.5"
          width="9.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x="1.25"
          y="1.25"
        />
        <circle cx="6" cy="6" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle cx="6" cy="3.25" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle cx="6" cy="8.75" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle cx="3.25" cy="6" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle cx="8.75" cy="6" fill={secondaryfill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Border2;

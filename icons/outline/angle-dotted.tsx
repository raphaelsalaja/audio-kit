import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AngleDotted({
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
          d="M2.75,2.75V13.25c0,1.105,.895,2,2,2H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="5.429"
          cy="8.783"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle cx="7.7" cy="10.3" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="9.217"
          cy="12.571"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AngleDotted;

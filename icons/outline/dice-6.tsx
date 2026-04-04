import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dice6({
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
        <rect
          height="12.5"
          width="12.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="2.75"
        />
        <circle cx="6.5" cy="12.25" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="6.5" cy="9" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="6.5" cy="5.75" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="11.5" cy="12.25" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="11.5" cy="9" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="11.5" cy="5.75" fill={secondaryfill} r="1" stroke="none" />
      </g>
    </svg>
  );
}

export default Dice6;

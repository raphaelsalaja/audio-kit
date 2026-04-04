import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad5({
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
        <circle
          cx="10.25"
          cy="7.5"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="13.25"
          cy="7.5"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="11.75"
          cy="6.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="11.75"
          cy="8.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle cx="6" cy="7.5" fill={secondaryfill} r="1" stroke="none" />
        <path
          d="M9,11.25h2.752c.533,0,1.044,.213,1.419,.591l2.392,2.409s1.745-.34,1.388-2.915-2.07-6.538-2.07-6.538c-.429-.867-1.022-1.047-3.231-1.047h-2.651s-2.651,0-2.651,0c-2.209,0-2.802,.179-3.231,1.047,0,0-1.714,3.963-2.07,6.538s1.388,2.915,1.388,2.915l2.392-2.409c.375-.378,.886-.591,1.419-.591h2.752Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Gamepad5;

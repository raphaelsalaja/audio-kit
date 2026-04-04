import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ticket4({
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
          cx="6.75"
          cy="7.563"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="6.75"
          cy="10.437"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <path
          d="M14.25,3.75h-6c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5h-1.5c-1.105,0-2,.896-2,2v6.5c0,1.104,.895,2,2,2h1.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5h6c1.105,0,2-.896,2-2V5.75c0-1.104-.895-2-2-2Z"
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

export default Ticket4;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartActivity3({
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
          d="M15.75,8.75h-.5c-1.105,0-2,.895-2,2v2.375c0,1.174-.951,2.125-2.125,2.125h0c-1.174,0-2.125-.951-2.125-2.125v-4.125s0-4.125,0-4.125c0-1.174-.951-2.125-2.125-2.125h0c-1.174,0-2.125,.951-2.125,2.125v2.375c0,1.105-.895,2-2,2h-.5"
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

export default ChartActivity3;

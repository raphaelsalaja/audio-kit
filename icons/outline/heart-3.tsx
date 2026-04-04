import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart3({
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
          d="m5.647,10.884c.223.116.483.116.706,0,1.178-.614,4.897-2.841,4.897-6.461.006-1.59-1.278-2.885-2.87-2.895-.958.012-1.848.495-2.38,1.29-.533-.795-1.423-1.278-2.38-1.29-1.592.01-2.876,1.304-2.87,2.895,0,3.62,3.72,5.846,4.897,6.461h0Z"
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

export default Heart3;

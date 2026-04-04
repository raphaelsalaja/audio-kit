import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartLine2({
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
          d="M6.033,6.74c.489-.487,1.281-.486,1.767,0l3.283,3.284,4.917-4.917v-.356c0-1.517-1.233-2.75-2.75-2.75H4.75c-1.517,0-2.75,1.233-2.75,2.75v6.023L6.033,6.74Z"
          fill={fill}
        />
        <path
          d="M11.967,11.26c-.488,.487-1.28,.486-1.767,0l-3.283-3.284L2,12.894v.356c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V7.227l-4.033,4.033Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SquareChartLine2;

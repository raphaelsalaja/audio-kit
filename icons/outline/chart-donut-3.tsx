import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartDonut3({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.348"
          x2="3.875"
          y1="6.348"
          y2="3.875"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.348"
          x2="3.875"
          y1="11.652"
          y2="14.125"
        />
        <path
          d="M12.75,9c0,2.071-1.679,3.75-3.75,3.75s-3.75-1.679-3.75-3.75,1.679-3.75,3.75-3.75c1.035,0,1.971,.419,2.65,1.096l2.473-2.477c-1.312-1.31-3.123-2.12-5.123-2.12C4.996,1.75,1.75,4.996,1.75,9s3.246,7.25,7.25,7.25,7.25-3.246,7.25-7.25h-3.5Z"
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

export default ChartDonut3;

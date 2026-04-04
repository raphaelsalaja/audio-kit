import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag6({
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
          d="M3.75,3c1.784-.232,3.073,.092,4.021,.625,1.641,.922,1.87,2.249,3.5,3.125,1.254,.674,2.66,.719,3.979,.5-2.075,2.554-3.703,3.051-4.833,3-1.433-.064-2.359-1.021-4.125-.792-1.13,.147-1.995,.701-2.542,1.135"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.75"
          x2="3.75"
          y1="1.75"
          y2="16.25"
        />
      </g>
    </svg>
  );
}

export default Flag6;

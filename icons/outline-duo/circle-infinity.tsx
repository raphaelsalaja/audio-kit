import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleInfinity({
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
          d="m9,1.75C4.996,1.75,1.75,4.9958,1.75,9s3.246,7.25,7.25,7.25,7.25-3.2461,7.25-7.25S13.0041,1.75,9,1.75Zm2.55,9c-.9916,0-1.7708-.875-2.55-1.75-.7792.875-1.5583,1.75-2.55,1.75-.939,0-1.7-.7834-1.7-1.75s.761-1.75,1.7-1.75c.9917,0,1.7708.875,2.55,1.75.7792-.875,1.5583-1.75,2.55-1.75.939,0,1.7.7834,1.7,1.75s-.761,1.75-1.7,1.75Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9,9c-.7792-.875-1.5583-1.75-2.55-1.75-.9389,0-1.7.7835-1.7,1.75s.7611,1.75,1.7,1.75c.9917,0,1.7708-.875,2.55-1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m11.55,10.75c.9389,0,1.7-.7835,1.7-1.75s-.7611-1.75-1.7-1.75c-.9917,0-1.7708.875-2.55,1.75.7792.875,1.5583,1.75,2.55,1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="7.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CircleInfinity;

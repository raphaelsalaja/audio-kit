import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Space3d({
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
        <polyline
          fill="none"
          points="3.017 12.47 9 9 14.983 12.47"
          stroke={secondaryfill}
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
          x1="9"
          x2="9"
          y1="2.062"
          y2="9"
        />
        <path
          d="M15.25,11.473V6.527c0-.713-.38-1.372-.997-1.73l-4.25-2.465c-.621-.36-1.386-.36-2.007,0L3.747,4.797c-.617,.358-.997,1.017-.997,1.73v4.946c0,.713,.38,1.372,.997,1.73l4.25,2.465c.621,.36,1.386,.36,2.007,0l4.25-2.465c.617-.358,.997-1.017,.997-1.73Z"
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

export default Space3d;

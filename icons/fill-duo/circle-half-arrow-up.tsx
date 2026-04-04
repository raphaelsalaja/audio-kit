import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfArrowUp({
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
          d="m9.5303,5.2197c-.293-.293-.7676-.293-1.0605,0l-3.25,3.25c-.293.293-.293.7676,0,1.0605s.7676.293,1.0605,0l1.9697-1.9697v8.6895c0,.4141.3359.75.75.75s.75-.3359.75-.75V7.5605l1.9697,1.9697c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-3.25-3.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,1C4.5889,1,1,4.5889,1,9c0,.4141.3359.75.75.75s.75-.3359.75-.75c0-3.584,2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5c0,.4141.3359.75.75.75s.75-.3359.75-.75c0-4.4111-3.5889-8-8-8Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleHalfArrowUp;

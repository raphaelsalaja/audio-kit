import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfArrowRight({
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
          d="m8.4697,11.7197c-.293.293-.293.7676,0,1.0605.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l3.25-3.25c.293-.293.293-.7676,0-1.0605l-3.25-3.25c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l1.9697,1.9697H1.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h8.6895l-1.9697,1.9697Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,1c-.4141,0-.75.3359-.75.75s.3359.75.75.75c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75c4.4111,0,8-3.5889,8-8S13.4111,1,9,1Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleHalfArrowRight;

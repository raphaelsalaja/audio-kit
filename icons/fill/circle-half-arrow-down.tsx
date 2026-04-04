import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfArrowDown({
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
          d="m8.4697,12.7803c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l3.25-3.25c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-1.9697,1.9697V1.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v8.6895l-1.9697-1.9697c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l3.25,3.25Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m16.25,8.25c-.4141,0-.75.3359-.75.75,0,3.584-2.916,6.5-6.5,6.5s-6.5-2.916-6.5-6.5c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75c0,4.4111,3.5889,8,8,8s8-3.5889,8-8c0-.4141-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleHalfArrowDown;

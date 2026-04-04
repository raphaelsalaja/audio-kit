import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfArrowLeft({
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
          d="m16.25,8.25H7.5605l1.9697-1.9697c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-3.25,3.25c-.293.293-.293.7676,0,1.0605l3.25,3.25c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-1.9697-1.9697h8.6895c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,15.5c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75C4.5889,1,1,4.5889,1,9s3.5889,8,8,8c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleHalfArrowLeft;

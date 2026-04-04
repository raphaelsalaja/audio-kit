import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortVertical({
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
          d="m15.75,8.25h-5.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75h5.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m10.25,6.5h5.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-5.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.25,11.5h-4c-.4141,0-.75.3359-.75.75s.3359.75.75.75h4c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m6.7197,5.7803c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-2.5-2.5c-.293-.293-.7676-.293-1.0605,0l-2.5,2.5c-.293.293-.293.7676,0,1.0605s.7676.293,1.0605,0l1.2197-1.2197v8.8789l-1.2197-1.2197c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l2.5,2.5c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l2.5-2.5c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-1.2197,1.2197V4.5605l1.2197,1.2197Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SortVertical;

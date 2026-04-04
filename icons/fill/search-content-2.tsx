import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SearchContent2({
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
          d="m3.8213,12H1.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.0713c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m4.4268,8H1.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.6768c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m12.25,4H1.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h10.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m16.7803,15.2197l-2.1937-2.1934c.5683-.7827.9135-1.7373.9135-2.7764,0-2.6191-2.1309-4.75-4.75-4.75s-4.75,2.1309-4.75,4.75,2.1309,4.75,4.75,4.75c1.039,0,1.9932-.345,2.776-.9131l2.1937,2.1934c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605Zm-9.2803-4.9697c0-1.792,1.458-3.25,3.25-3.25s3.25,1.458,3.25,3.25-1.458,3.25-3.25,3.25-3.25-1.458-3.25-3.25Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SearchContent2;

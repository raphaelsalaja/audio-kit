import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenExternal({
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
          d="m16.5,10.25v-6c0-1.5188-1.2312-2.75-2.75-2.75h-6c-1.5188,0-2.75,1.2312-2.75,2.75v6c0,1.5188,1.2312,2.75,2.75,2.75h6c1.5188,0,2.75-1.2312,2.75-2.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m13,13.75v-.75h-5.25c-1.5166,0-2.75-1.2334-2.75-2.75v-5.25h-.75c-1.5166,0-2.75,1.2334-2.75,2.75v6c0,1.5166,1.2334,2.75,2.75,2.75h6c1.5166,0,2.75-1.2334,2.75-2.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m12.75,4.5h-3c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.1895l-2.4697,2.4697c-.293.293-.293.7676,0,1.0605.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l2.4697-2.4697v1.1895c0,.4141.3359.75.75.75s.75-.3359.75-.75v-3c0-.4141-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default OpenExternal;

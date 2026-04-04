import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flashlight({
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
          d="m11.75,3c-.4141,0-.75-.3359-.75-.75v-1c0-.4141.3359-.75.75-.75s.75.3359.75.75v1c0,.4141-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m14.5781,4.1714c-.1924,0-.3838-.0732-.5303-.2197-.293-.293-.293-.7681,0-1.0605l1.4219-1.4214c.2939-.2935.7686-.2925,1.0605,0,.293.293.293.7681,0,1.0605l-1.4219,1.4214c-.1465.1465-.3389.2197-.5303.2197Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m16.75,7h-1c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h1c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m14.4744,11.4885l.5129-.5129c.3311-.3306.5127-.77.5127-1.2373s-.1816-.9067-.5127-1.2373l-5.4883-5.4883c-.6816-.6826-1.793-.6826-2.4746,0l-.5125.5125,7.9625,7.9634Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m5.4955,4.6299c-.7895.9917-1.2407,2.1978-1.2407,3.4844,0,1.5039.5859,2.918,1.6494,3.9814,1.0977,1.0977,2.5391,1.6465,3.9814,1.6465,1.2384,0,2.4623-.4299,3.4824-1.239l-7.8726-7.8733Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m5.4055,13.655l-.3752.3752c-.1465.1465-.3379.2197-.5303.2197s-.3838-.0732-.5303-.2197c-.293-.293-.293-.7676,0-1.0605l.3752-.3752c-.5502-.6802-.9675-1.4451-1.2348-2.2651l-1.8904,1.8904c-.293.293-.293.7676,0,1.0605l3.5,3.5c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l1.8917-1.8916c-.821-.2668-1.5864-.6836-2.2665-1.2336Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Flashlight;

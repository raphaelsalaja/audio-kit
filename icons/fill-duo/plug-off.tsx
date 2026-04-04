import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlugOff({
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
          d="m10.8088,14.2405l-.3997-.3997c-.4248-.4248-.6592-.9897-.6592-1.5908s.2344-1.166.6592-1.5908c.4248-.4253.9902-.6592,1.5908-.6592s1.166.2339,1.5908.6592l.4092.4092.4092-.4092c.3079-.3083.691-.5122,1.1065-.6033.3126-.7925.4843-1.6548.4843-2.5559v-1.75c0-.9648-.7852-1.75-1.75-1.75H3.75c-.9648,0-1.75.7852-1.75,1.75v1.75c0,3.5881,2.7161,6.5642,6.25,6.9436v1.8064c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.8062c.3632-.0388.715-.1118,1.0588-.2034Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m15.0605,14.25l1.4697-1.4697c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-1.4697,1.4697-1.4697-1.4697c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l1.4697,1.4697-1.4697,1.4697c-.293.293-.293.7676,0,1.0605.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l1.4697-1.4697,1.4697,1.4697c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-1.4697-1.4697Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7,4V1.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v2.25h1.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.5,4V1.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v2.25h1.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default PlugOff;

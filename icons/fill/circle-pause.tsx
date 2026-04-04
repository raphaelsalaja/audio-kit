import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CirclePause({
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
          d="m9,1C4.5889,1,1,4.5889,1,9s3.5889,8,8,8,8-3.5889,8-8S13.4111,1,9,1Zm-1.5,10.75c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-5.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v5.5Zm4.5,0c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-5.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v5.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CirclePause;

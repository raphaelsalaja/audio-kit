import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Connection2({
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
          d="m12.25,13.25h-1.25c-1.5166,0-2.75-1.2334-2.75-2.75v-3.25c0-.6895-.5605-1.25-1.25-1.25h-1.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h1.25c1.5166,0,2.75,1.2334,2.75,2.75v3.25c0,.6895.5605,1.25,1.25,1.25h1.25c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <circle cx="3.5" cy="5.25" fill={fill} r="2.5" strokeWidth="0" />
        <circle cx="14.5" cy="12.75" fill={fill} r="2.5" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Connection2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodeFork({
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
          d="M13.25,5c-.414,0-.75,.336-.75,.75v1c0,.689-.561,1.25-1.25,1.25H6.75c-.689,0-1.25-.561-1.25-1.25v-1c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1c0,1.517,1.233,2.75,2.75,2.75h1.5v2.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-2.75h1.5c1.517,0,2.75-1.233,2.75-2.75v-1c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <circle cx="4.75" cy="3.75" fill={fill} r="2.5" />
        <circle cx="13.25" cy="3.75" fill={fill} r="2.5" />
        <circle cx="9" cy="14.25" fill={fill} r="2.5" />
      </g>
    </svg>
  );
}

export default CodeFork;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GolfFlag({
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
          d="M9,8c-.169,0-.334,.007-.5,.012v3.238c0,1.241-1.009,2.25-2.25,2.25s-2.25-1.009-2.25-2.25v-2.414c-1.848,.72-3,1.847-3,3.164,0,2.28,3.439,4,8,4s8-1.72,8-4-3.439-4-8-4Z"
          fill={fill}
        />
        <path
          d="M6.25,12c-.414,0-.75-.336-.75-.75V1.75c0-.254,.129-.492,.343-.63s.484-.158,.715-.054l5,2.25c.274,.124,.449,.399,.442,.7-.006,.301-.192,.568-.472,.68l-4.528,1.812v4.742c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default GolfFlag;

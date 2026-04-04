import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowBookmark({
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
          d="m14.25,2H3.75c-1.5188,0-2.75,1.2312-2.75,2.75v8.5c0,1.5188,1.2312,2.75,2.75,2.75h5.0059c.414,0,.75-.336.75-.75s-.336-.75-.75-.75H3.75c-.6904,0-1.25-.5596-1.25-1.25v-5.25h13.75c.4142,0,.75-.3358.75-.75v-2.5c0-1.5188-1.2312-2.75-2.75-2.75ZM4,6c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm3,0c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,10h-2.5c-.965,0-1.75.785-1.75,1.75v5.5c0,.303.183.577.463.693.28.117.603.052.817-.163l1.72-1.72,1.72,1.72c.144.144.335.22.53.22.097,0,.194-.019.287-.057.28-.116.463-.39.463-.693v-5.5c0-.965-.785-1.75-1.75-1.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default WindowBookmark;

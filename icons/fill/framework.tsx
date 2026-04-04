import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Framework({
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
          d="m14.63,4.148l-4.25-2.465c-.852-.493-1.908-.493-2.76,0l-4.25,2.465c-.845.49-1.37,1.402-1.37,2.378v4.946c0,.977.525,1.888,1.37,2.379l4.25,2.465c.426.247.903.37,1.38.37s.954-.124,1.38-.37l4.25-2.465c.845-.49,1.37-1.402,1.37-2.378v-4.946c0-.977-.525-1.888-1.37-2.379Zm-6.257-1.167c.388-.225.868-.225,1.254,0l4.128,2.394-1.505.873-2.874-1.667c-.233-.135-.52-.135-.753,0l-2.874,1.667-1.505-.873,4.128-2.394h.001Zm.627,8.922l-2.505-1.4497,1.755-1.018,2.505,1.4497-1.755,1.018Zm2.5-2.32l-2.5-1.4418v-2.035l2.5,1.4418v2.035Zm-7.377,2.972c-.384-.223-.623-.638-.623-1.082v-4.796l1.5.87v3.337c0,.268.143.515.374.649l2.876,1.668v1.746l-4.127-2.393v.001Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Framework;

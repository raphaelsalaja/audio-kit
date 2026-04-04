import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VShapedArrowLeft({
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
          d="M10.922 2.13C10.578 1.896 10.112 1.986 9.87999 2.328L5.62999 8.57799C5.45699 8.83299 5.45699 9.16699 5.62999 9.42199L9.87999 15.672C10.026 15.885 10.261 16 10.501 16C10.646 16 10.793 15.958 10.922 15.87C11.265 15.637 11.354 15.171 11.12 14.828L7.157 8.99999L11.12 3.17199C11.353 2.82899 11.265 2.363 10.922 2.13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default VShapedArrowLeft;

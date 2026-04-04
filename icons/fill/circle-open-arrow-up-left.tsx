import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleOpenArrowUpLeft({
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
          d="M7.5,8.561v2.689c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V6.75c0-.414,.336-.75,.75-.75h4.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-2.689l6.599,6.598c1.149-1.385,1.841-3.162,1.841-5.098,0-4.411-3.589-8-8-8S1,4.589,1,9s3.589,8,8,8c1.936,0,3.713-.692,5.099-1.841l-6.599-6.598Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleOpenArrowUpLeft;

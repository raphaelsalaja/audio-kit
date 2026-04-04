import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShapeTriangle2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m11.704,8.184L7.914,1.606c-.398-.693-1.114-1.106-1.914-1.106s-1.516.414-1.914,1.106L.296,8.184c-.399.692-.398,1.518,0,2.209s1.115,1.104,1.914,1.104h7.578c.799,0,1.515-.413,1.914-1.104s.4-1.518,0-2.209Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ShapeTriangle2;

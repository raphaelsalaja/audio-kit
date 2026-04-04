import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StrokeRoundCap({
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
          d="M11,15H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H11c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H11c3.309,0,6,2.691,6,6s-2.691,6-6,6Z"
          fill={fill}
        />
        <path
          d="M11,6c-1.394,0-2.558,.96-2.893,2.25H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h6.357c.335,1.29,1.5,2.25,2.893,2.25,1.654,0,3-1.346,3-3s-1.346-3-3-3Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default StrokeRoundCap;

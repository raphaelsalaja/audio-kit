import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDiagonalIn({
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
          d="M1.22,2.28L5.439,6.5H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H7.25c.414,0,.75-.336,.75-.75V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v2.689S2.28,1.22,2.28,1.22c-.146-.146-.338-.22-.53-.22s-.384,.073-.53,.22c-.293,.293-.293,.768,0,1.061Z"
          fill={secondaryfill}
        />
        <path
          d="M4.75,16H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75h-3.75s0,5.25,0,5.25c0,1.241-1.01,2.25-2.25,2.25H2s0,3.75,0,3.75c0,1.517,1.233,2.75,2.75,2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDiagonalIn;

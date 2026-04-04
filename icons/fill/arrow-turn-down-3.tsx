import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTurnDown3({
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
          d="m6.25,11.5c-.414,0-.75-.336-.75-.75V3.25c0-.689-.561-1.25-1.25-1.25h-2c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h2c1.517,0,2.75,1.233,2.75,2.75v7.5c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m6.25,11.75c-.192,0-.384-.073-.53-.22l-3.25-3.25c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l2.72,2.72,2.72-2.72c.293-.293.768-.293,1.061,0s.293.768,0,1.061l-3.25,3.25c-.146.146-.338.22-.53.22Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowTurnDown3;

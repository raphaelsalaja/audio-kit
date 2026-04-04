import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UTurnToLeft2({
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
          d="m8.25,11h-1.25c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h1.25c.965,0,1.75-.785,1.75-1.75s-.785-1.75-1.75-1.75H1.25c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h7c1.792,0,3.25,1.458,3.25,3.25s-1.458,3.25-3.25,3.25Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m4.25,9.25c-.192,0-.384-.073-.53-.22L.47,5.78c-.293-.293-.293-.768,0-1.061L3.72,1.47c.293-.293.768-.293,1.061,0s.293.768,0,1.061l-2.72,2.72,2.72,2.72c.293.293.293.768,0,1.061-.146.146-.338.22-.53.22Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default UTurnToLeft2;

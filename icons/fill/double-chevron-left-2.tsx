import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DoubleChevronLeft2({
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
          d="m5.75,10.75c-.192,0-.384-.073-.53-.22L1.22,6.53c-.293-.293-.293-.768,0-1.061L5.22,1.47c.293-.293.768-.293,1.061,0s.293.768,0,1.061l-3.47,3.47,3.47,3.47c.293.293.293.768,0,1.061-.146.146-.338.22-.53.22Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.25,10.75c-.192,0-.384-.073-.53-.22l-4-4c-.293-.293-.293-.768,0-1.061L9.72,1.47c.293-.293.768-.293,1.061,0s.293.768,0,1.061l-3.47,3.47,3.47,3.47c.293.293.293.768,0,1.061-.146.146-.338.22-.53.22Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DoubleChevronLeft2;

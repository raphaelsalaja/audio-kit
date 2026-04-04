import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DoubleChevronRight2({
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
          d="m6.25,10.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l3.47-3.47-3.47-3.47c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l4,4c.293.293.293.768,0,1.061l-4,4c-.146.146-.338.22-.53.22Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m1.75,10.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l3.47-3.47L1.22,2.53c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l4,4c.293.293.293.768,0,1.061l-4,4c-.146.146-.338.22-.53.22Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DoubleChevronRight2;

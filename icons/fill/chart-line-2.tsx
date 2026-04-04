import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartLine2({
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
          d="M1.75,13c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L6.116,6.823c.487-.487,1.28-.487,1.768,0l3.116,3.116,4.72-4.72c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-4.896,4.896c-.487,.487-1.28,.487-1.768,0l-3.116-3.116L2.28,12.78c-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartLine2;

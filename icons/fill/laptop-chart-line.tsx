import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LaptopChartLine({
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
          d="M5.25,10.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l2.146-2.146c.487-.487,1.28-.487,1.768,0l1.616,1.616,1.97-1.97c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-2.146,2.146c-.487,.487-1.28,.487-1.768,0l-1.616-1.616-1.97,1.97c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75,15.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75c.689,0,1.25-.561,1.25-1.25V4.75c0-.689-.561-1.25-1.25-1.25H4.25c-.689,0-1.25,.561-1.25,1.25V12.75c0,.689,.561,1.25,1.25,1.25,.414,0,.75,.336,.75,.75s-.336,.75-.75,.75c-1.517,0-2.75-1.233-2.75-2.75V4.75c0-1.517,1.233-2.75,2.75-2.75H13.75c1.517,0,2.75,1.233,2.75,2.75V12.75c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
        />
        <path
          d="M17.25,15.5H.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H17.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LaptopChartLine;

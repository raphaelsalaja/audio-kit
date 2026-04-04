import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartColumnTrendUp({
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
          d="M3.75,15.5c-.414,0-.75-.336-.75-.75v-3.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3.5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M14.25,15.5c-.414,0-.75-.336-.75-.75v-6.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M7.25,15.5c-.414,0-.75-.336-.75-.75v-6.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M10.75,15.5c-.414,0-.75-.336-.75-.75v-3.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3.5c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M2.75,8.5c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l3.646-3.646c.487-.487,1.28-.487,1.768,0l3.116,3.116,3.97-3.97c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-4.146,4.146c-.487,.487-1.28,.487-1.768,0l-3.116-3.116-3.47,3.47c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ChartColumnTrendUp;

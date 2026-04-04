import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTurnDown2({
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
          d="M8.25,15.75c-.414,0-.75-.336-.75-.75V4.75c0-1.517,1.233-2.75,2.75-2.75h4c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-4c-.689,0-1.25,.561-1.25,1.25V15c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M8.25,16c-.192,0-.384-.073-.53-.22L3.47,11.53c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l3.72,3.72,3.72-3.72c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-4.25,4.25c-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTurnDown2;

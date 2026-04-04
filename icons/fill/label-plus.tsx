import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LabelPlus({
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
          d="m12,15.25v-.25h-.25c-1.2407,0-2.25-1.0093-2.25-2.25s1.0093-2.25,2.25-2.25h.25v-.25c0-1.2407,1.0093-2.25,2.25-2.25.2646,0,.515.0542.751.1384v-1.0991c0-.7749-.33-1.5188-.905-2.0398h-.001l-3.92-3.5471c-.67-.605-1.679-.605-2.348,0l-3.921,3.5471c-.575.521-.905,1.2639-.905,2.0398v7.2107c0,1.5171,1.233,2.75,2.75,2.75h6.5c.1837,0,.3628-.0198.5365-.0542-.4781-.4131-.7875-1.0159-.7875-1.6958ZM7.75,6.75c0-.689.561-1.25,1.25-1.25s1.25.561,1.25,1.25-.561,1.25-1.25,1.25-1.25-.561-1.25-1.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16.75,12h-1.75v-1.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75v1.75h-1.75c-.414,0-.75.336-.75.75s.336.75.75.75h1.75v1.75c0,.414.336.75.75.75s.75-.336.75-.75v-1.75h1.75c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default LabelPlus;

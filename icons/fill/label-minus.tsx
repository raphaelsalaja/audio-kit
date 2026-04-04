import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LabelMinus({
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
          d="m11.75,15c-1.2402,0-2.25-1.0093-2.25-2.25s1.0098-2.25,2.25-2.25h3.251v-3.4607c0-.7749-.33-1.5188-.905-2.0398h-.001l-3.92-3.5471c-.67-.605-1.679-.605-2.348,0l-3.921,3.5471c-.575.521-.905,1.2639-.905,2.0398v7.2107c0,1.5171,1.233,2.75,2.75,2.75h6.5c1.2552,0,2.3043-.8494,2.633-2h-3.134ZM7.75,6.75c0-.689.561-1.25,1.25-1.25s1.25.561,1.25,1.25-.561,1.25-1.25,1.25-1.25-.561-1.25-1.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16.75,12h-5c-.414,0-.75.336-.75.75s.336.75.75.75h5c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default LabelMinus;

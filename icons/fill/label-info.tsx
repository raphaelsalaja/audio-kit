import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LabelInfo({
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
          d="m7.5,13c0-3.0327,2.4678-5.5,5.5-5.5.3419,0,.6752.0356,1,.0957v-.5564c0-.7749-.33-1.5188-.905-2.0398h-.001l-3.92-3.5471c-.67-.605-1.679-.605-2.348,0l-3.921,3.5471c-.575.521-.905,1.2639-.905,2.0398v7.2107c0,1.5171,1.233,2.75,2.75,2.75h4.4869c-1.0663-1.0037-1.7369-2.4233-1.7369-4Zm-.751-6.25c0-.689.561-1.25,1.25-1.25s1.25.561,1.25,1.25-.561,1.25-1.25,1.25-1.25-.561-1.25-1.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13,9c-2.2061,0-4,1.7944-4,4s1.7939,4,4,4,4-1.7944,4-4-1.7939-4-4-4Zm.75,6c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-1.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v1.5Zm-.75-3c-.4832,0-.875-.3918-.875-.875s.3918-.875.875-.875.875.3917.875.875-.3918.875-.875.875Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default LabelInfo;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Slash({
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
          d="m5.731,12.269l-2.932-3.047c-1.452-1.528-1.389-3.944.139-5.395,1.528-1.452,3.944-1.389,5.395.139.27.284.495.609.666.962.998-2.056,3.598-2.813,5.57-1.497"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.8115,14.4307l.4675.4854c.393.4089,1.048.4089,1.441,0l5.48-5.6941c.7794-.8198,1.1728-1.9741,1.0051-3.1848"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2.75"
          x2="16"
          y1="15.25"
          y2="2"
        />
      </g>
    </svg>
  );
}

export default Heart2Slash;

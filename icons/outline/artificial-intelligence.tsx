import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArtificialIntelligence({
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
        <polyline
          fill="none"
          points="9.318 12.75 5.748 4.25 5.57 4.25 2 12.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="11.75 7.25 13.75 7.25 13.75 12.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2.84"
          x2="8.478"
          y1="10.75"
          y2="10.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.75"
          x2="16"
          y1="12.75"
          y2="12.75"
        />
        <path
          d="M15.706,2.286l-1.145-.382-.382-1.145c-.124-.37-.737-.37-.86,0l-.382,1.145-1.145,.382c-.185,.062-.31,.235-.31,.43s.125,.368,.31,.43l1.145,.382,.382,1.145c.062,.185,.235,.31,.43,.31s.368-.125,.43-.31l.382-1.145,1.145-.382c.185-.062,.31-.235,.31-.43s-.125-.368-.31-.43Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ArtificialIntelligence;

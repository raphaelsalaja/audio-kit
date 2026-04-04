import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarDays({
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
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.75"
          x2="5.75"
          y1="2.75"
          y2=".75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.25"
          x2="12.25"
          y1="2.75"
          y2=".75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2.25"
          x2="15.75"
          y1="6.25"
          y2="6.25"
        />
        <rect
          height="12.5"
          width="13.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.25"
          y="2.75"
        />
        <path
          d="M9,8.25c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.5,10.25c.551,0,1-.449,1-1s-.449-1-1-1-1,.449-1,1,.449,1,1,1Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9,11.25c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M5.5,11.25c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.5,11.25c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CalendarDays;

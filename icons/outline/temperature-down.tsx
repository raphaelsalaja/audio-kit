import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TemperatureDown({
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
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.25"
          x2="6.25"
          y1="12"
          y2="9.25"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.75"
          x2="13.75"
          y1="10.25"
          y2="2.75"
        />
        <path
          d="M3.75,10.306V4.25c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5v6.056c.617,.631,1,1.492,1,2.444,0,1.933-1.567,3.5-3.5,3.5s-3.5-1.567-3.5-3.5c0-.952,.383-1.813,1-2.444Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="6.25"
          cy="12.75"
          fill={secondaryfill}
          r="1.5"
          stroke="none"
        />
        <polyline
          fill="none"
          points="16.25 7.75 13.75 10.25 11.25 7.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default TemperatureDown;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Obj3dFront({
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
          x1="9"
          x2="9"
          y1="8.25"
          y2="1"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.999"
          x2="8.999"
          y1="15.745"
          y2="12.494"
        />
        <polyline
          fill="none"
          points="6.75 3 9 .75 11.25 3"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.748,8.624v3.251c0,.262-.146.523-.413.664l-5.87,3.091c-.146.077-.306.116-.466.116s-.32-.038-.466-.116l-5.87-3.091c-.267-.141-.413-.402-.413-.664v-3.251"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6,6.2021l-3.348,1.7588c-.535.281-.535,1.0459,0,1.3271l5.883,3.0908c.293.1541.641.1541.934,0l5.883-3.0908c.535-.2812.535-1.0461,0-1.3271l-3.352-1.7617"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Obj3dFront;

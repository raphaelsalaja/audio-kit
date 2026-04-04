import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Plus({
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
          x1="14.25"
          x2="14.25"
          y1="9.25"
          y2="14.25"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.75"
          x2="11.75"
          y1="11.75"
          y2="11.75"
        />
        <path
          d="m16.2202,6.9961c.0507-.4648.0242-.95-.1042-1.4402-.181-.688-.575-1.3201-1.11-1.7898-2.005-1.7581-4.933-1.05-6.007,1.1619-.171-.353-.396-.677-.666-.9619-1.451-1.5281-3.867-1.5911-5.395-.1392-1.528,1.4512-1.59,3.8669-.139,5.395l5.48,5.6941c.393.4089,1.048.4089,1.441,0l.5488-.5698"
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

export default Heart2Plus;

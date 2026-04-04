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
        <path
          d="m15.7151,7.5423c-.3936-.338-.9055-.5423-1.4651-.5423-1.2426,0-2.25,1.0074-2.25,2.25v.25h-.25c-1.2426,0-2.25,1.0074-2.25,2.25,0,.9041.5353,1.6029,1.272,2.0729l-1.052,1.0931c-.393.409-1.048.409-1.441,0l-5.48-5.694c-1.452-1.528-1.389-3.944.139-5.395,1.528-1.452,3.944-1.389,5.395.139.27.284.495.609.666.962,1.074-2.212,4.002-2.92,6.007-1.162.535.469.929,1.101,1.11,1.79.2121.8081-.2856,2.0853-.4009,1.9863Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m16.2202,6.9961c.0507-.4648.0242-.95-.1042-1.4402-.181-.688-.575-1.3201-1.11-1.7898-2.005-1.7581-4.933-1.05-6.007,1.1619-.171-.353-.396-.677-.666-.9619-1.451-1.5281-3.867-1.5911-5.395-.1392-1.528,1.4512-1.59,3.8669-.139,5.395l5.48,5.6941c.393.4089,1.048.4089,1.441,0l.5488-.5698"
          fill="none"
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
          x1="14.25"
          x2="14.25"
          y1="9.25"
          y2="14.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.75"
          x2="11.75"
          y1="11.75"
          y2="11.75"
        />
      </g>
    </svg>
  );
}

export default Heart2Plus;

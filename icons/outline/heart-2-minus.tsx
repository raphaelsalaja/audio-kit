import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Minus({
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
          d="m15.5746,8.75c.6087-.8875.8473-2.0298.5414-3.1951-.181-.688-.575-1.3201-1.11-1.7898-2.005-1.7583-4.933-1.0503-6.007,1.1619-.171-.353-.396-.677-.666-.9622-1.451-1.5278-3.867-1.5908-5.395-.1389-1.528,1.4509-1.59,3.8669-.139,5.395l5.48,5.6941c.393.4089,1.048.4089,1.441,0l.5495-.5706"
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
          x1="16.75"
          x2="11.75"
          y1="11.75"
          y2="11.75"
        />
      </g>
    </svg>
  );
}

export default Heart2Minus;

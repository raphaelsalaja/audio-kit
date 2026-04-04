import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2List({
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
          d="m16,8.5h-4.75c-1.2426,0-2.25,1.0074-2.25,2.25,0,.7068.3259,1.3375.8357,1.75-.5098.4125-.8357,1.0432-.8357,1.75,0,.1815.0215.358.0621.5271.0354.1473-.5336.3985-.7831.1389l-5.48-5.694c-1.452-1.528-1.389-3.944.139-5.395,1.528-1.452,3.944-1.389,5.395.139.27.284.495.609.666.962,1.074-2.212,4.002-2.92,6.007-1.162.535.469.929,1.101,1.11,1.79.2775,1.0571.3717,2.0978-.116,2.944Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m16.0595,7.75c.217-.6794.2573-1.4302.0565-2.1941-.181-.689-.575-1.321-1.11-1.7898-2.005-1.7581-4.933-1.05-6.007,1.1619-.171-.353-.396-.678-.666-.9619-1.451-1.5281-3.867-1.5911-5.395-.1392-1.528,1.4512-1.591,3.8669-.139,5.395l5.48,5.6951c.0194.02.0451.0281.0657.0461"
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
          x1="11.25"
          x2="16.25"
          y1="14.25"
          y2="14.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.25"
          x2="16.25"
          y1="10.75"
          y2="10.75"
        />
      </g>
    </svg>
  );
}

export default Heart2List;

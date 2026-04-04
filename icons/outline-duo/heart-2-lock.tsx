import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Lock({
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
          d="m15.25,12.75h-4c-.5523,0-1,.4477-1,1v1.5c0,.5523.4477,1,1,1h4c.5523,0,1-.4477,1-1v-1.5c0-.5523-.4477-1-1-1Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m7.9765,13.8118c0-1.1294.6207-2.2112,1.5309-2.7942.1201-1.96,1.7529-3.5176,3.7427-3.5176.8756,0,1.7001.3063,2.3382.8119.0632.0501.8021-1.7108.5278-2.756-.181-.689-.575-1.321-1.11-1.7898-2.005-1.7581-4.933-1.05-6.007,1.1619-.171-.353-.396-.678-.666-.9619-1.451-1.5281-3.867-1.5911-5.395-.1392-1.528,1.4512-1.591,3.8669-.139,5.395l4.675,4.8576.5024-.2677Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m16.0664,7.7437c.2167-.6765.2498-1.427.0497-2.1878-.181-.688-.575-1.3201-1.11-1.7898-2.005-1.7581-4.933-1.05-6.007,1.1619-.171-.353-.396-.677-.666-.9619-1.452-1.5281-3.867-1.5911-5.395-.1392-1.528,1.4512-1.591,3.8669-.139,5.395l4.451,4.6247"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m11.75,12.75v-1.5c0-.828.672-1.5,1.5-1.5h0c.828,0,1.5.672,1.5,1.5v1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="3.5"
          width="6"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="10.25"
          y="12.75"
        />
      </g>
    </svg>
  );
}

export default Heart2Lock;

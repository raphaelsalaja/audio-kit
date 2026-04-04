import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlagMenu({
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
          d="m8.6398,9.5364c.1186-.0173.2368-.0364.3602-.0364.5651,0,1.0809.1953,1.5.5127.4191-.3174.9349-.5127,1.5-.5127s1.0809.1953,1.5.5127c.2242-.1699.4777-.301.75-.3896V3.241c-1.175.8171-2.268,1.1389-3.281.9841-1.693-.2603-2.248-1.71-3.938-1.9692-1.025-.158-2.12.1763-3.281.9841v6.563c1.161-.8069,2.255-1.1409,3.281-.9841.6666.1023,1.1558.3909,1.6088.7175Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m7.7253,9.009c-.2109-.0849-.4397-.151-.6943-.19-1.026-.157-2.12.177-3.281.984"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.75,3.24c1.161-.808,2.256-1.142,3.281-.984,1.69.259,2.245,1.709,3.938,1.969,1.013.155,2.106-.167,3.281-.984v5.6037"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12,13c-.5513,0-1-.4482-1-1s.4487-1,1-1,1,.4482,1,1-.4487,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,13c-.5513,0-1-.4482-1-1s.4487-1,1-1,1,.4482,1,1-.4487,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15,13c-.5513,0-1-.4482-1-1s.4487-1,1-1,1,.4482,1,1-.4487,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.75"
          x2="3.75"
          y1="2"
          y2="16"
        />
      </g>
    </svg>
  );
}

export default FlagMenu;

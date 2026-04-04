import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgBubbleUser({
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
          d="M13.25,1.25c-2.209,0-4,1.791-4,4,0,.728,.197,1.408,.537,1.996,.237,.445-.029,1.496-.537,2.004,.69,.037,1.598-.274,2.004-.537,.27,.156,.698,.362,1.258,.468,.239,.045,.486,.069,.738,.069,2.209,0,4-1.791,4-4S15.459,1.25,13.25,1.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M.75,16c.525-1.597,2.028-2.75,3.801-2.75s3.276,1.153,3.801,2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="4.551"
          cy="8.75"
          fill="none"
          r="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MsgBubbleUser;

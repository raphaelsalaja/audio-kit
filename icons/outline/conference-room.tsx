import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConferenceRoom({
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
        <rect
          height="13.5"
          width="6.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="5.75"
          y="2.25"
        />
        <path
          d="M2.25,10.25c-.689,0-1.25-.561-1.25-1.25s.561-1.25,1.25-1.25,1.25,.561,1.25,1.25-.561,1.25-1.25,1.25Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2.25,5.5c-.689,0-1.25-.561-1.25-1.25s.561-1.25,1.25-1.25,1.25,.561,1.25,1.25-.561,1.25-1.25,1.25Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2.25,15c-.689,0-1.25-.561-1.25-1.25s.561-1.25,1.25-1.25,1.25,.561,1.25,1.25-.561,1.25-1.25,1.25Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M14.5,9c0-.689,.561-1.25,1.25-1.25s1.25,.561,1.25,1.25-.561,1.25-1.25,1.25-1.25-.561-1.25-1.25Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M14.5,4.25c0-.689,.561-1.25,1.25-1.25s1.25,.561,1.25,1.25-.561,1.25-1.25,1.25-1.25-.561-1.25-1.25Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M14.5,13.75c0-.689,.561-1.25,1.25-1.25s1.25,.561,1.25,1.25-.561,1.25-1.25,1.25-1.25-.561-1.25-1.25Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ConferenceRoom;

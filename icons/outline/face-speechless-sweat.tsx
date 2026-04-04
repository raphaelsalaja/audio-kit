import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSpeechlessSweat({
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
        <circle cx="6" cy="9.5" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="12" cy="9.5" fill={secondaryfill} r="1" stroke="none" />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.75"
          x2="10.25"
          y1="12.25"
          y2="12.25"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5"
          x2="13"
          y1="8.25"
          y2="8.25"
        />
        <path
          d="M11.3,2.129c-.724-.242-1.495-.379-2.3-.379C4.996,1.75,1.75,4.996,1.75,9s3.246,7.25,7.25,7.25,7.25-3.246,7.25-7.25c0-.283-.02-.561-.052-.835"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.353,5.75c1.047,0,1.897-.852,1.897-1.902,0-1.445-1.897-3.098-1.897-3.098,0,0-1.897,1.652-1.897,3.098,0,1.051,.849,1.902,1.897,1.902Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default FaceSpeechlessSweat;

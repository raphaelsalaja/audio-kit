import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlagCheckered({
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
          d="M3.75,3.24c1.161-.808,2.256-1.142,3.281-.984,1.69,.259,2.245,1.709,3.938,1.969,1.013,.155,2.106-.167,3.281-.984v6.563c-1.175,.818-2.268,1.14-3.281,.984-1.692-.26-2.248-1.71-3.938-1.969-1.026-.157-2.12,.177-3.281,.984"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75,6.521c1.161-.808,2.256-1.142,3.281-.984,1.69,.259,2.245,1.709,3.938,1.969,1.013,.155,2.106-.167,3.281-.984"
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
          x1="7.25"
          x2="7.25"
          y1="2.297"
          y2="8.86"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.75"
          x2="10.75"
          y1="4.182"
          y2="10.744"
        />
        <line
          fill="none"
          stroke={secondaryfill}
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

export default FlagCheckered;

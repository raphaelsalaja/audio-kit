import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockPassword({
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
          d="M5.75,6.75V4c0-1.795,1.455-3.25,3.25-3.25h0c1.795,0,3.25,1.455,3.25,3.25v2.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="6.5"
          width="10.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="3.75"
          y="6.75"
        />
        <circle
          cx="2.25"
          cy="16.75"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
        <circle
          cx="6.75"
          cy="16.75"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
        <circle
          cx="11.25"
          cy="16.75"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
        <circle
          cx="15.75"
          cy="16.75"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="9.5"
          y2="10.5"
        />
      </g>
    </svg>
  );
}

export default LockPassword;

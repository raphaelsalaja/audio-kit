import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HatSanta({
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
          d="M2.979,6.75C3.75,3.87,6.377,1.75,9.5,1.75c3.728,0,6.75,3.022,6.75,6.75v5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.764,13.091c-.486-.176-1.165-.129-1.513,.442-.349-.571-1.027-.618-1.513-.442-.969,.351-1.672,1.463-2.681,1.338-.208-.026-.374,.166-.279,.343,.534,.996,1.591,1.229,2.183,1.229,.679,0,1.673-.414,2.289-1.341,.616,.928,1.61,1.341,2.289,1.341,.592,0,1.65-.233,2.183-1.229,.095-.177-.072-.369-.279-.343-1.008,.127-1.712-.987-2.681-1.338h.002Z"
          fill={secondaryfill}
          stroke="none"
        />
        <circle
          cx="15"
          cy="15"
          fill="none"
          r="1.75"
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
          x1="13.75"
          x2="13.75"
          y1="13.5"
          y2="8.75"
        />
        <rect
          height="3.5"
          width="12"
          fill="none"
          rx="1.5"
          ry="1.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="1.75"
          y="6.75"
        />
      </g>
    </svg>
  );
}

export default HatSanta;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Laptop3({
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
          d="m16.0663,12.791l-1.8163-4.541V3.25c0-.8284-.6716-1.5-1.5-1.5h-7.5c-.8284,0-1.5.6716-1.5,1.5v5l-1.8163,4.541c-.567,1.4172.4769,2.959,2.0034,2.959h10.126c1.5265,0,2.5703-1.5417,2.0034-2.959Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="4.75"
          cy="13.25"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="7.5833"
          cy="13.25"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="10.4167"
          cy="13.25"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="6.1667"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="11.8333"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="13.25"
          cy="13.25"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.75"
          x2="14.25"
          y1="8.25"
          y2="8.25"
        />
      </g>
    </svg>
  );
}

export default Laptop3;

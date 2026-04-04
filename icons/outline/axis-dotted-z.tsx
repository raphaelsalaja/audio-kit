import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisDottedZ({
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
        <polyline
          fill="none"
          points="1.75 12.75 1.75 16.25 5.25 16.25"
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
          x1="1.75"
          x2="7.25"
          y1="16.25"
          y2="10.75"
        />
        <path
          d="M7.25,2.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M7.25,5.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M7.25,8.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <circle
          cx="16.25"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="13.25"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="10.25"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AxisDottedZ;

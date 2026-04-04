import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisDottedX({
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
          points="13.763 13.225 16.237 10.75 13.763 8.275"
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
          x2="16.25"
          y1="10.75"
          y2="10.75"
        />
        <path
          d="M6.75,2.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M6.75,5.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M6.75,8.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <circle
          cx="1.25"
          cy="16.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="3.25"
          cy="14.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="5.25"
          cy="12.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AxisDottedX;

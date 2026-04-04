import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RowsOffsetLeft({
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
          height="3"
          width="9"
          fill={secondaryfill}
          opacity=".3"
          rx="1"
          ry="1"
          strokeWidth="0"
          x="7.25"
          y="7.5"
        />
        <rect
          height="3"
          width="9"
          fill={secondaryfill}
          opacity=".3"
          rx="1"
          ry="1"
          strokeWidth="0"
          x="7.25"
          y="1.75"
        />
        <rect
          height="3"
          width="9"
          fill={secondaryfill}
          opacity=".3"
          rx="1"
          ry="1"
          strokeWidth="0"
          x="7.25"
          y="13.25"
        />
        <rect
          height="3"
          width="9"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="7.25"
          y="7.5"
        />
        <rect
          height="3"
          width="9"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="7.25"
          y="1.75"
        />
        <rect
          height="3"
          width="9"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="7.25"
          y="13.25"
        />
        <polyline
          fill="none"
          points="4.25 6.5 1.75 9 4.25 11.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default RowsOffsetLeft;

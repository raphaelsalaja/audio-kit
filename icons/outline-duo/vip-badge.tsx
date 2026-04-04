import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VipBadge({
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
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="7.3613"
          y2="11.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.124"
          x2="16.25"
          y1="3.25"
          y2="3.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.75"
          x2="4.8762"
          y1="3.25"
          y2="3.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.75"
          x2="16.25"
          y1="14.75"
          y2="14.75"
        />
        <polyline
          fill="none"
          points="6.25 6.25 4 11.75 1.75 6.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.25,9.75h2.2455c.9683,0,1.7525-.7862,1.75-1.7545h0c-.0025-.9647-.7853-1.7455-1.75-1.7455h-2.2455s0,5.5,0,5.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.618,2.8812l-.946-.3099-.316-.9501c-.102-.3099-.609-.3099-.711,0l-.316.9501-.946.3099c-.153.05-.257.2-.257.36s.104.3.257.35l.946.3202.316.95c.051.15.194.25.355.25s.305-.1.355-.25l.316-.95.946-.3202c.153-.0499.257-.1899.257-.35s-.103-.3099-.256-.36Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default VipBadge;

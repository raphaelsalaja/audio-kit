import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDottedClock({
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
        <circle
          cx="3.873"
          cy="14.127"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="1.75"
          cy="9"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="3.873"
          cy="3.873"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="6.226"
          cy="15.698"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="2.302"
          cy="11.774"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="2.302"
          cy="6.226"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="6.226"
          cy="2.302"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="1.75"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="16.25"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="14.127"
          cy="14.127"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="16.25"
          cy="9"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="14.127"
          cy="3.873"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="11.774"
          cy="15.698"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="15.698"
          cy="11.774"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="15.698"
          cy="6.226"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="11.774"
          cy="2.302"
          fill={secondaryfill}
          opacity=".4"
          r=".75"
          strokeWidth="0"
        />
        <path
          d="m12.2495,12c-.1475,0-.2964-.043-.4263-.1333l-3.25-2.25c-.2026-.1401-.3232-.3706-.3232-.6167v-4.25c0-.4141.3359-.75.75-.75s.75.3359.75.75v3.8569l2.9268,2.0264c.3408.2358.4258.7031.1899,1.0435-.1455.2104-.3794.3232-.6172.3232Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleDottedClock;

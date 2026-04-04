import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CubeFloor({
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
          d="m8.157,1.977l-3.57,2.071c-.518.301-.837.854-.837,1.453v4.155c0,.599.319,1.153.837,1.453l3.57,2.071c.521.302,1.165.302,1.686,0l3.57-2.071c.518-.301.837-.854.837-1.453v-4.155c0-.599-.319-1.153-.837-1.453l-3.57-2.071c-.521-.302-1.165-.302-1.686,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.4562,13.3391c.5075.2732.7938.583.7938.9109,0,1.105-3.246,2-7.25,2s-7.25-.895-7.25-2c0-.3278.2862-.6375.7935-.9107"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="14.026 4.663 9 7.578 3.974 4.663"
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
          x1="9"
          x2="9"
          y1="13.406"
          y2="7.578"
        />
      </g>
    </svg>
  );
}

export default CubeFloor;

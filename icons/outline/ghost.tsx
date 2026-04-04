import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ghost({
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
        <ellipse
          cx="6"
          cy="8.5"
          fill={secondaryfill}
          rx="1"
          ry="1.5"
          strokeWidth="0"
        />
        <ellipse
          cx="12"
          cy="8.5"
          fill={secondaryfill}
          rx="1"
          ry="1.5"
          strokeWidth="0"
        />
        <path
          d="m9,1.75c-3.452,0-6.25,2.7979-6.25,6.25v8.25c1.75,0,1.781-1.5,3.25-1.5s1.562,1.5,3,1.5,1.531-1.5,3-1.5,1.5,1.5,3.25,1.5v-8.25c0-3.4521-2.798-6.25-6.25-6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="9"
          cy="11.25"
          fill={secondaryfill}
          r="1.25"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Ghost;

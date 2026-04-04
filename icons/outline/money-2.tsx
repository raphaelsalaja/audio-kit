import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Money2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <rect
          height="8.5"
          width="10.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x=".75"
          y="1.75"
        />
        <circle
          cx="6"
          cy="6"
          fill={secondaryfill}
          r="1.25"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m.75,3.75v1c1.657,0,3-1.343,3-3h-1C1.645,1.75.75,2.645.75,3.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.25,3.75v1c-1.657,0-3-1.343-3-3h1c1.105,0,2,.895,2,2Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m.75,8.25v-1c1.657,0,3,1.343,3,3h-1c-1.105,0-2-.895-2-2Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.25,8.25v-1c-1.657,0-3,1.343-3,3h1c1.105,0,2-.895,2-2Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Money2;

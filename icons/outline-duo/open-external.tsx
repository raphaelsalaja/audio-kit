import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenExternal({
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
          d="m5.75,4.25v6c0,1.1046.8954,2,2,2h6c1.1046,0,2-.8954,2-2v-6c0-1.1046-.8954-2-2-2h-6c-1.1046,0-2,.8954-2,2Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m12.25,12.25v1.5c0,1.1046-.8954,2-2,2h-6c-1.1046,0-2-.8954-2-2v-6c0-1.1046.8954-2,2-2h1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.75,4.25v6c0,1.1046.8954,2,2,2h6c1.1046,0,2-.8954,2-2v-6c0-1.1046-.8954-2-2-2h-6c-1.1046,0-2,.8954-2,2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="9.75 5.25 12.75 5.25 12.75 8.25"
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
          x2="12.5"
          y1="9"
          y2="5.5"
        />
      </g>
    </svg>
  );
}

export default OpenExternal;

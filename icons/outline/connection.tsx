import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Connection({
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
          d="M13,15.047c1.958-1.298,3.25-3.522,3.25-6.047,0-4.004-3.246-7.25-7.25-7.25S1.75,4.996,1.75,9s3.246,7.25,7.25,7.25v-3.146"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.043,7.75h5.914c.552,0,1,.448,1,1v.396c0,2.185-1.772,3.957-3.957,3.957h0c-2.185,0-3.957-1.772-3.957-3.957v-.396c0-.552,.448-1,1-1Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.232"
          x2="7.232"
          y1="7.75"
          y2="5.55"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.768"
          x2="10.768"
          y1="7.75"
          y2="5.55"
        />
      </g>
    </svg>
  );
}

export default Connection;

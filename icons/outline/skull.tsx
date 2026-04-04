import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Skull({
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
          x1="7.75"
          x2="7.75"
          y1="14.25"
          y2="16.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.25"
          x2="10.25"
          y1="14.25"
          y2="16.25"
        />
        <circle cx="5.5" cy="9.5" fill={secondaryfill} r="1.5" stroke="none" />
        <circle cx="12.5" cy="9.5" fill={secondaryfill} r="1.5" stroke="none" />
        <polyline
          fill="none"
          points="8 11.75 9 10.75 10 11.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75,8.5c0-4.17-3.782-7.457-8.103-6.619-2.667,.518-4.801,2.688-5.283,5.361-.223,1.236-.093,2.418,.282,3.486-.249,.362-.396,.799-.396,1.272,0,1.243,1.007,2.25,2.25,2.25,.264,0,.514-.054,.75-.138v1.138c0,.552,.448,1,1,1h5.5c.552,0,1-.448,1-1v-1.138c.236,.084,.486,.138,.75,.138,1.243,0,2.25-1.007,2.25-2.25,0-.47-.145-.905-.391-1.266,.246-.7,.391-1.449,.391-2.234Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Skull;

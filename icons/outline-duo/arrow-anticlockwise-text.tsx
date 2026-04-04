import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowAnticlockwiseText({
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
          d="m9,16.25c4.004,0,7.25-3.246,7.25-7.25S13.004,1.75,9,1.75,1.75,4.996,1.75,9s3.246,7.25,7.25,7.25Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m1.7528,9.2017c.1068,3.907,3.3107,7.0483,7.2472,7.0483,4.004,0,7.25-3.25,7.25-7.25S13.004,1.75,9,1.75c-3.031,0-5.627,1.86-6.71,4.5l-.54-3"
          fill="none"
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
          x1="5.75"
          x2="12.25"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.75"
          x2="9.75"
          y1="11.75"
          y2="11.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.75"
          x2="12.25"
          y1="6.25"
          y2="6.25"
        />
      </g>
    </svg>
  );
}

export default ArrowAnticlockwiseText;

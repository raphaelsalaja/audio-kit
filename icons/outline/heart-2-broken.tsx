import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Broken({
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
        <polyline
          fill="none"
          points="8.999 4.927 7.75 7 10.5 8.75 8.5 10.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.2,9.222l-5.48,5.694c-.393,.409-1.048,.409-1.441,0L2.799,9.222c-1.452-1.528-1.389-3.944,.139-5.395,1.528-1.452,3.944-1.389,5.395,.139,.27,.284,.495,.609,.666,.962,1.074-2.212,4.002-2.92,6.007-1.162,.535,.469,.929,1.101,1.11,1.79,.363,1.383-.034,2.738-.916,3.666Z"
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

export default Heart2Broken;

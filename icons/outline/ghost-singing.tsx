import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GhostSinging({
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
          d="M10.478,2.504c-.885-.481-1.9-.754-2.978-.754C4.048,1.75,1.25,4.548,1.25,8v8.25c1.75,0,1.781-1.5,3.25-1.5s1.562,1.5,3,1.5c1.438,0,1.531-1.5,3-1.5,1.469,0,1.5,1.5,3.25,1.5v-7"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6,11h2c.276,0,.5,.224,.5,.5h0c0,.828-.672,1.5-1.5,1.5h0c-.828,0-1.5-.672-1.5-1.5h0c0-.276,.224-.5,.5-.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.25,5.25V.75s.646,.896,2,1.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="4.5" cy="9" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="9.5" cy="9" fill={secondaryfill} r="1" stroke="none" />
        <circle
          cx="13.75"
          cy="5.25"
          fill="none"
          r="1.5"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default GhostSinging;

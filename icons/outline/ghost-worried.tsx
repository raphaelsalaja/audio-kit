import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GhostWorried({
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
          d="M9,16.25c1.438,0,1.531-1.5,3-1.5,1.469,0,1.5,1.5,3.25,1.5V8c0-3.452-2.798-6.25-6.25-6.25S2.75,4.548,2.75,8v8.25c1.75,0,1.781-1.5,3.25-1.5s1.562,1.5,3,1.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8,10h2c.276,0,.5,.224,.5,.5h0c0,.828-.672,1.5-1.5,1.5h0c-.828,0-1.5-.672-1.5-1.5h0c0-.276,.224-.5,.5-.5Z"
          fill={secondaryfill}
          stroke="none"
          transform="translate(18 22) rotate(180)"
        />
        <circle cx="6" cy="9" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="12" cy="9" fill={secondaryfill} r="1" stroke="none" />
      </g>
    </svg>
  );
}

export default GhostWorried;

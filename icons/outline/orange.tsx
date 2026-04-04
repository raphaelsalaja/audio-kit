import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Orange({
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
          d="M11.5,0h0C11.776,0,12,.224,12,.5h0c0,1.38-1.12,2.5-2.5,2.5h0c-.276,0-.5-.224-.5-.5h0C9,1.12,10.12,0,11.5,0Z"
          fill={secondaryfill}
          stroke="none"
        />
        <circle cx="9" cy="13.25" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="11.25"
          cy="11.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="6.75"
          cy="11.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="9"
          cy="10.5"
          fill="none"
          r="5.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Orange;

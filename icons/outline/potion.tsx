import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Potion({
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
        <circle
          cx="7.25"
          cy="8.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <path
          d="M14.19,11.794c-1.322-1.469-3.502-1.806-5.209-.794-1.693,1.004-3.852,.68-5.177-.759"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25,1.75V6.072c-2.034,.723-3.5,2.646-3.5,4.928,0,2.899,2.351,5.25,5.25,5.25s5.25-2.351,5.25-5.25c0-2.283-1.466-4.205-3.5-4.929V1.75"
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
          y1="1.75"
          y2="1.75"
        />
      </g>
    </svg>
  );
}

export default Potion;

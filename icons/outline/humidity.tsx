import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Humidity({
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
          d="M2,9.75c1.521,0,2-1.5,3.5-1.5s2.021,1.5,3.5,1.5c1.542,0,2.042-1.5,3.5-1.5s2.021,1.5,3.5,1.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2,5.75c1.521,0,2-1.5,3.5-1.5s2.021,1.5,3.5,1.5c1.542,0,2.042-1.5,3.5-1.5s2.021,1.5,3.5,1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2,13.75c1.521,0,2-1.5,3.5-1.5s2.021,1.5,3.5,1.5c1.542,0,2.042-1.5,3.5-1.5s2.021,1.5,3.5,1.5"
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

export default Humidity;

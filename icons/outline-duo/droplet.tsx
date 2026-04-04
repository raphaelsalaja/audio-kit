import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Droplet({
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
          d="m9,16.25c3.038,0,5.5-2.47,5.5-5.517,0-4.191-3.083-5.983-5.5-8.983-2.417,3-5.5,4.792-5.5,8.983,0,3.047,2.462,5.517,5.5,5.517Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9,16.25c3.038,0,5.5-2.47,5.5-5.517,0-4.191-3.083-5.983-5.5-8.983-2.417,3-5.5,4.792-5.5,8.983,0,3.047,2.462,5.517,5.5,5.517Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9,13.25c-1.3784,0-2.5-1.1289-2.5-2.5166"
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

export default Droplet;

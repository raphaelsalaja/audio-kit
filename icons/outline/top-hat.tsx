import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TopHat({
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
          d="M14.25,14.75c-.271-1.725-.472-3.767-.469-6.062,.003-1.769,.127-3.386,.31-4.821,.076-.595-.391-1.116-.991-1.116h-4.1s-4.1,0-4.1,0c-.6,0-1.067,.521-.991,1.116,.183,1.436,.307,3.053,.31,4.821,.004,2.295-.198,4.338-.469,6.062"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75,12.75c0,1.105-.895,2-2,2h-5.75s-5.75,0-5.75,0c-1.105,0-2-.895-2-2"
          fill="none"
          stroke={secondaryfill}
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
          x1="4.167"
          x2="13.833"
          y1="10.75"
          y2="10.75"
        />
      </g>
    </svg>
  );
}

export default TopHat;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag({
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
          d="M3.75 3.24C4.911 2.432 6.006 2.098 7.031 2.256C8.721 2.515 9.276 3.965 10.969 4.225C11.982 4.38 13.075 4.058 14.25 3.241V9.804C13.075 10.622 11.982 10.944 10.969 10.788C9.277 10.528 8.721 9.078 7.031 8.819C6.005 8.662 4.911 8.996 3.75 9.803"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 3.24C4.911 2.432 6.006 2.098 7.031 2.256C8.721 2.515 9.276 3.965 10.969 4.225C11.982 4.38 13.075 4.058 14.25 3.241V9.804C13.075 10.622 11.982 10.944 10.969 10.788C9.277 10.528 8.721 9.078 7.031 8.819C6.005 8.662 4.911 8.996 3.75 9.803"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 2V16"
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

export default Flag;

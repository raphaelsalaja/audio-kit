import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label({
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
          d="m4.408,5.905l3.921-3.547c.381-.345.961-.345,1.342,0l3.921,3.547c.419.379.658.918.658,1.483v6.862c0,1.105-.895,2-2,2h-6.5c-1.105,0-2-.895-2-2v-6.862c0-.565.239-1.104.658-1.483Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9,8c.6904,0,1.25-.5596,1.25-1.25s-.5596-1.25-1.25-1.25-1.25.5596-1.25,1.25.5596,1.25,1.25,1.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m4.408,5.5554l3.921-3.547c.381-.345.961-.345,1.342,0l3.921,3.547c.419.379.658.918.658,1.483v7.2116c0,1.105-.895,2-2,2h-6.5c-1.105,0-2-.895-2-2v-7.2116c0-.565.239-1.104.658-1.483Z"
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

export default Label;

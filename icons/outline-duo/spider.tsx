import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Spider({
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
          d="m9,11.75c1.7949,0,3.25-1.4551,3.25-3.25s-1.4551-3.25-3.25-3.25-3.25,1.4551-3.25,3.25,1.4551,3.25,3.25,3.25Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9,11.75c1.7949,0,3.25-1.4551,3.25-3.25s-1.4551-3.25-3.25-3.25-3.25,1.4551-3.25,3.25,1.4551,3.25,3.25,3.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9,16c.8284,0,1.5-.6716,1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5,1.5.6716,1.5,1.5,1.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.442,10.5l-2.78-1.741c-.26-.163-.431-.437-.464-.743l-.449-4.266"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.917,11.75l-2.215,1.454c-.282.185-.451.499-.451.836v2.21"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.016,11.25h-2.777c-.309,0-.6.142-.789.386l-1.45,1.864"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m11.558,10.5l2.78-1.741c.26-.163.431-.437.464-.743l.449-4.266"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.083,11.75l2.215,1.454c.282.185.451.499.451.836v2.21"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.984,11.25h2.777c.309,0,.6.142.789.386l1.45,1.864"
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
          x1="9"
          x2="9"
          y1="2.25"
          y2=".75"
        />
      </g>
    </svg>
  );
}

export default Spider;

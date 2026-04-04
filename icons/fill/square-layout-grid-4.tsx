import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareLayoutGrid4({
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
          d="M16,6.5v-1.75c0-1.517-1.233-2.75-2.75-2.75H4.75c-1.517,0-2.75,1.233-2.75,2.75v1.75h14Z"
          fill={secondaryfill}
        />
        <path
          d="M8.25,8H2v5.25c0,1.517,1.233,2.75,2.75,2.75h3.5V8Z"
          fill={fill}
        />
        <path
          d="M9.75,8v8h3.5c1.517,0,2.75-1.233,2.75-2.75v-5.25h-6.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareLayoutGrid4;

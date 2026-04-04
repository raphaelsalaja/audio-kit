import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareLayoutGrid2({
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
          d="M8.25,2h-3.5c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h3.5V2Z"
          fill={secondaryfill}
        />
        <path
          d="M9.75,8.25h6.25v-3.5c0-1.517-1.233-2.75-2.75-2.75h-3.5v6.25Z"
          fill={fill}
        />
        <path
          d="M9.75,9.75v6.25h3.5c1.517,0,2.75-1.233,2.75-2.75v-3.5h-6.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareLayoutGrid2;

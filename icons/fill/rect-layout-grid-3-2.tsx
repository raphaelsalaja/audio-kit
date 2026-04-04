import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLayoutGrid32({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m11.5,4v-.75c0-1.517-1.233-2.75-2.75-2.75H3.25C1.733.5.5,1.733.5,3.25v.75h11Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m5.5,5.5v6h3.25c1.517,0,2.75-1.233,2.75-2.75v-3.25h-6Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m4,5.5H.5v3.25c0,1.517,1.233,2.75,2.75,2.75h.75v-6Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default RectLayoutGrid32;

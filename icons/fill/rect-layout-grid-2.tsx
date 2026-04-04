import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLayoutGrid2({
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
        <rect height="4" width="8" fill={fill} x="1.5" y="7" />
        <path
          d="M9.5,5.5V2H4.25c-1.517,0-2.75,1.233-2.75,2.75v.75H9.5Z"
          fill={fill}
        />
        <path
          d="M9.5,12.5H1.5v.75c0,1.517,1.233,2.75,2.75,2.75h5.25v-3.5Z"
          fill={fill}
        />
        <path
          d="M13.75,2h-2.75v14h2.75c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default RectLayoutGrid2;

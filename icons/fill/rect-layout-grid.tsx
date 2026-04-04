import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLayoutGrid({
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
          d="M8.5,5.5h8v-.75c0-1.517-1.233-2.75-2.75-2.75h-5.25v3.5Z"
          fill={fill}
        />
        <path
          d="M7,2h-2.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h2.75V2Z"
          fill={secondaryfill}
        />
        <path
          d="M8.5,12.5v3.5h5.25c1.517,0,2.75-1.233,2.75-2.75v-.75H8.5Z"
          fill={fill}
        />
        <rect height="4" width="8" fill={fill} x="8.5" y="7" />
      </g>
    </svg>
  );
}

export default RectLayoutGrid;

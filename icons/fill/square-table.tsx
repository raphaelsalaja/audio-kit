import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareTable({
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
          d="M8,6h8v-1.25c0-1.517-1.233-2.75-2.75-2.75h-5.25V6Z"
          fill={fill}
        />
        <path
          d="M6.5,12H2v1.25c0,1.517,1.233,2.75,2.75,2.75h1.75v-4Z"
          fill={secondaryfill}
        />
        <path
          d="M8,12v4h5.25c1.517,0,2.75-1.233,2.75-2.75v-1.25H8Z"
          fill={fill}
        />
        <path
          d="M6.5,6V2h-1.75c-1.517,0-2.75,1.233-2.75,2.75v1.25H6.5Z"
          fill={secondaryfill}
        />
        <rect height="3" width="8" fill={fill} x="8" y="7.5" />
        <rect height="3" width="4.5" fill={secondaryfill} x="2" y="7.5" />
      </g>
    </svg>
  );
}

export default SquareTable;

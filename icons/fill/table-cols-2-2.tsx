import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableCols22({
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
          d="m5.25.5h-2C1.733.5.5,1.733.5,3.25v5.5c0,1.517,1.233,2.75,2.75,2.75h2V.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.75.5h-2v11h2c1.517,0,2.75-1.233,2.75-2.75V3.25c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default TableCols22;

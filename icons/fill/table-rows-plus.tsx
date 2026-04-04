import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowsPlus({
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
          d="M16,8.25v-3.5c0-1.517-1.233-2.75-2.75-2.75H4.75c-1.517,0-2.75,1.233-2.75,2.75v3.5h14Z"
          fill={fill}
        />
        <path
          d="M10,14.25c0-1.241,1.01-2.25,2.25-2.25h.25v-.25c0-.876,.508-1.628,1.241-2H2v3.5c0,1.517,1.233,2.75,2.75,2.75h6.103c-.516-.413-.853-1.04-.853-1.75Z"
          fill={fill}
        />
        <path
          d="M17.25,13.5h-1.75v-1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75h-1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.75v1.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.75h1.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TableRowsPlus;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDiagonalIn3({
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
          d="m5.75,1c-.414,0-.75.336-.75.75v2.189L1.28.22C.987-.073.513-.073.22.22S-.073.987.22,1.28l3.72,3.72H1.75c-.414,0-.75.336-.75.75s.336.75.75.75h4c.414,0,.75-.336.75-.75V1.75c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9.25,12H3.75c-1.517,0-2.75-1.233-2.75-2.75v-1c0-.414.336-.75.75-.75s.75.336.75.75v1c0,.689.561,1.25,1.25,1.25h5.5c.689,0,1.25-.561,1.25-1.25V3.75c0-.689-.561-1.25-1.25-1.25h-1c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h1c1.517,0,2.75,1.233,2.75,2.75v5.5c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowDiagonalIn3;
